
(function () {
    const __hasProp = {}.hasOwnProperty;
    const __slice = [].slice;

    this['WebRealTimeVoiceClientFacade'] = (function () {

        function _Class(userId, opts) { //初始化值
            this.userId = userId;
            if (opts == null) {
                opts = {};
            }
            let k; let v;
            for (k in opts) {
                if (!__hasProp.call(opts, k)) continue;
                v = opts[k];
                this[k] = v;
            }
        }

        const p = _Class.prototype;

        p['clientStatus'] = 0; //客户端状态 0-未运行 1-已启动 2-已登录
        p['isTalking'] = false;

        p['voiceType'] = 0; //类型： 0-临时组呼; 1-单呼
        p['autoClose'] = false; //定时关闭


        p['clientUrl'] = 'http://127.0.0.1:54321/'; //4G对讲程序调用地址
        p['webServerUrl'] = 'localhost:8080/';  //后台接口调用地址
        p['communicationServerConfig'] = { url: '218.17.161.71', port: '12380' }; //后台通讯程序接口地址

        p['clientUserId'] = 0;  //软终端ID

        p['closeInterval'] = null; //三十分钟无呼叫时，自动关闭临时组呼
        p['closeCallback'] = function () {  //关闭呼叫回调

        };
        p['closeInMinute'] = 0;
        p['closeToTalTime'] = 30;
        p['updateCloseTime'] = function () {    //更新关闭时间回调

        };

        p['checkClientStartTime'] = 0;
        p['checkClientTotalTime'] = 1000 * 10; //获取客户端userId总时间
        p['checkClientInterval'] = null;

        p['speakerUserId'] = null; //当前讲话设备ID
        p['getSpeakerInterval'] = null; //获取当前讲话设备ID定时器
        p['speakerChangeCallback'] = function (id) {    //当前正在对讲的设备(说话的设备)

        };

        p['_isSuspend'] = false;
        p['suspendGroupInfo'];

        p['groupId'] = 0;
        p['groupName'] = '';
        p['groupMemberIds'] = '';

        p['seq'] = '';  //序列号，
        p['sign'] = ''; //校验码

        p['init'] = function (voiceType) {  //设置呼叫类型 0-临时组呼，1-单呼
            this.voiceType = voiceType;
            this.clientStatus = 0;
            this.clientUserId = 0;
            this.speakerUserId = 0;
            this.groupId = 0;
            this.groupName = '';
            this.userIds = '';
            this.isTalking = false;
            // this._isSuspend = false;
        };
        p['initCheckCode'] = function (seq, sign) {  //设置序列号，校验码
            this.seq = seq;
            this.sign = sign;
        };

        p['checkClientRunning'] = function () { //校验4G对讲程序是否启动/连接成功
            if (this.clientStatus === 2) {
                return;
            }

            const self = this;

            $.ajax({
                type: 'GET',
                url: `${this.clientUrl}?host=${this.communicationServerConfig.url}&port=${this.communicationServerConfig.port}`,
                timeout: 200,
                async: false,
                xhrFields: {
                    withCredentials: false
                },
                beforeSend(xhr) {
                    // 覆盖全局设置
                },
                success(data, statu) {
                    if (data !== null && data !== '') {
                        const userId = parseInt(data);
                        if (userId > 0) {
                            self.clientStatus = 2;
                            self.clientUserId = userId;
                            console.info(`self.clientUserId${self.clientUserId}`);
                        } else if (userId === 0) {
                            self.clientStatus = 1;
                        }
                    } else {
                        self.clientStatus = 0;
                    }
                },
                error(data, statu, error) {
                    self.clientStatus = 0;
                }
            });
        };
        p['isClientRunning'] = function (callback) { //校验4G对讲程序是否启动
            const self = this;
            this.checkClientRunning();

            if (this.clientStatus === 1) {
                const interval = self.checkClientInterval;
                if (interval === null) {
                    self.checkClientStartTime = new Date().getTime();
                    self.checkClientInterval = setInterval(
                        () => {
                            self.checkClientRunning();
                            if (self.clientStatus === 2
                                || new Date().getTime() - self.checkClientStartTime > self.checkClientTotalTime) {
                                self.checkClientInterval = clearInterval(self.checkClientInterval);
                                callback(self.clientStatus === 2);
                            }
                        }, 1000
                    );
                }
            } else if (self.clientStatus === 2) {
                callback(true);
            } else {
                callback(false);
            }
        };

        p['isRunning'] = function () {
            return this.clientStatus === 2;
        };

        p['start'] = function (userIds, successCallback, failCallback) {    //开始呼叫
            const self = this;
            this.checkClientRunning();

            if (this.clientStatus === 0) {
                // layer.alert("语音对讲客户端未启动，请安装后打开客户端");
            } else if (this.clientStatus === 1) {
                // layer.alert("语音对讲客户端登录失败，请联系系统管理人员");
            } else if (this.clientStatus === 2) {
                const gropuMemberIds = `${self.clientUserId},${userIds}`;
                self.userIds = userIds;
                $.ajax({
                    type: 'POST',
                    url: `${this.webServerUrl}/thirdSystem/facade_start_voice.htm`,
                    data: { seq: self.seq, sign: self.sign, voiceType: self.voiceType, clientUserId: self.clientUserId, userIds: gropuMemberIds },
                    success(data, statu) {
                        if (data.status === 'ok') {
                            self.groupMemberIds = gropuMemberIds;
                            self.groupId = data.groupId;
                            self.groupName = data.groupName;
                            if (self.autoClose) {
                                self.startCloseInterval();
                            }
                            self.startGetSpeakerInterval();
                            if ($.isFunction(successCallback)) {
                                successCallback(self.groupId, self.groupName);
                            }
                        } else {
                            console.info(data);
                            if ($.isFunction(failCallback)) {
                                failCallback();
                            }
                        }
                    },
                    error(data, statu, error) {
                        if ($.isFunction(failCallback)) {
                            failCallback();
                        }
                    }
                });
            }
        };

        p['stop'] = function (forceStop) {  //停止呼叫
            const self = this;
            if (this.clientStatus === 2 || forceStop) {
                if (self.isTalking) {
                    self.stopTalking();
                }

                $.ajax({
                    type: 'POST',
                    url: `${this.webServerUrl}/thirdSystem/facade_stop_voice.htm`,
                    async: false,
                    data: { seq: self.seq, sign: self.sign, groupId: self.groupId },
                    success(data, statu) {
                        if (data === 'ok') {
                            console.info('停用成功');
                        } else {
                            console.info(`停用失败,${data}`);
                        }
                    },
                    error(data, statu, error) {


                    }
                });
            }
            self.stopCloseInterval();
            self.stopGetSpeakerInterval();
        };

        p['addMembers'] = function (userIds, successCallback, failCallback) {   //添加成员
            const self = this;
            $.ajax({
                type: 'POST',
                url: `${this.webServerUrl}/thirdSystem/facade_add_group_user_mapping.htm`,
                data: { seq: self.seq, sign: self.sign, groupId: self.groupId, userIds },
                success(data, statu) {
                    if (data === '添加成功') {
                        if ($.isFunction(successCallback)) {
                            successCallback();
                        }
                    } else {
                        console.info(data);
                        if ($.isFunction(successCallback)) {
                            successCallback();
                        }
                    }
                },
                error(data, statu, error) {
                    if ($.isFunction(failCallback)) {
                        failCallback();
                    }
                }
            });
        };
        p['removeMembers'] = function (userIds, successCallback, failCallback) {    //删除成员
            const self = this;
            $.ajax({
                type: 'POST',
                url: `${this.webServerUrl}/thirdSystem/facade_delete_member.htm`,
                data: { seq: self.seq, sign: self.sign, groupId: self.groupId, userIds },
                success(data, statu) {
                    if (data === '删除成功') {
                        if ($.isFunction(successCallback)) {
                            successCallback();
                        }
                    } else {
                        console.info(data);
                        if ($.isFunction(failCallback)) {
                            failCallback();
                        }
                    }
                },
                error(data, statu, error) {
                    if ($.isFunction(failCallback)) {
                        failCallback();
                    }
                }
            });
        };
        p['isSuspend'] = function () {
            return this._isSuspend;
        };
        p['suspend'] = function () {
            this._isSuspend = true;
            this.suspendGroupInfo = { groupId: this.groupId, groupName: this.groupName, userIds: copyString(this.userIds) };
            this.stopCloseInterval();
            this.stopGetSpeakerInterval();
        };
        p['resume'] = function (successCallback) {
            this._isSuspend = false;
            if (this.clientStatus === 2) {
                const suspendGroupInfo = this.suspendGroupInfo;
                this.groupId = suspendGroupInfo.groupId;
                this.groupName = suspendGroupInfo.groupName;
                this.userIds = suspendGroupInfo.userIds;
                if ($.isFunction(successCallback)) {
                    successCallback(this.groupId, this.groupName, this.userIds);
                }
                if (this.autoClose) {
                    this.startCloseInterval();
                }
                this.startGetSpeakerInterval();
            }
        };

        p['startCloseInterval'] = function () {
            const self = this;
            this.closeInMinute = this.closeToTalTime;
            this.updateCloseTime(this.closeInMinute);
            if (this.closeInterval === null) {
                this.closeInterval = setInterval((obj) => {
                    obj.closeInMinute -= 1;
                    obj.updateCloseTime(obj.closeInMinute);
                    if (obj.closeInMinute <= 0) {
                        obj.stop();
                        if (obj.closeCallback) {
                            obj.closeCallback();
                        }
                        obj.stopCloseInterval();
                    }
                }, 1000 * 60, self);
            }
        };
        p['resetCloseInterval'] = function () {
            this.closeInMinute = this.closeToTalTime;
            if (this.closeInterval !== null) {
                this.stopCloseInterval();
                this.startCloseInterval();
            }
        };
        p['stopCloseInterval'] = function () {
            if (this.closeInterval !== null) {
                clearInterval(this.closeInterval);
                this.closeInterval = null;
            }
        };

        p['startGetSpeakerInterval'] = function () {
            const self = this;
            if (this.getSpeakerInterval === null) {
                this.getSpeakerInterval = setInterval((obj) => {
                    obj.getSpeaker();
                }, 500, self);
            }
        };
        p['stopGetSpeakerInterval'] = function () {
            if (this.getSpeakerInterval !== null) {
                clearInterval(this.getSpeakerInterval);
                this.getSpeakerInterval = null;
            }
        };

        // 临时群组默认有效时间为30分钟，超过30分钟未关闭时，延长30分钟
        p['extendedInvalidTime'] = function () {
            const self = this;
            if (this.clientStatus === 2) {
                $.ajax({
                    type: 'POST',
                    url: `${this.webServerUrl}/thirdSystem/facade_extended_invalid_time.htm`,
                    data: { seq: self.seq, sign: self.sign, groupId: self.groupId },
                    success(data, statu) {
                        if (data === 'ok') {
                            console.info('延长有效时间成功');
                        } else {

                        }
                    },
                    error(data, statu, error) {

                    }
                });
            }
        };

        p['getSpeaker'] = function () {
            const self = this;

            if (self.isTalking) {

            }

            $.ajax({
                type: 'GET',
                url: `${this.clientUrl}?speaker=''`,
                timeout: 200,
                xhrFields: {
                    withCredentials: false
                },
                beforeSend(xhr) {
                    // 覆盖全局设置
                },
                success(data, statu) {
                    let newSpeakerId = parseInt(data);

                    if (newSpeakerId === self.clientUserId) {
                        newSpeakerId = 0; //为对讲程序讲话时，不显示讲话人员
                    }
                    if (self.speakerUserId !== newSpeakerId) {
                        self.speakerUserId = newSpeakerId;
                        self.speakerChangeCallback(self.speakerUserId);
                    }
                },
                error(data, statu, error) {
                    console.info('获取讲话人信息失败');
                }
            });
        };

        p['startTalking'] = function (successCallback, failCallback) {  //开始对讲
            const self = this;

            if (self.isTalking) {
                return;
            }

            $.ajax({
                type: 'GET',
                url: `${this.clientUrl}?state=1`,
                timeout: 2000,
                xhrFields: {
                    withCredentials: false
                },
                beforeSend(xhr) {
                    // 覆盖全局设置
                },
                success(data, statu) {
                    console.info('开始对讲成功');
                    self.resetCloseInterval();
                    self.isTalking = true;
                    if ($.isFunction(successCallback)) {
                        successCallback();
                    }
                },
                error(data, statu, error) {
                    if ($.isFunction(failCallback)) {
                        failCallback();
                    }
                }
            });
        };
        p['stopTalking'] = function (successCallback, failCallback) { //结束对讲
            const self = this;

            if (!self.isTalking) {
                return;
            }

            $.ajax({
                type: 'GET',
                url: `${this.clientUrl}?state=2`,
                timeout: 200,
                xhrFields: {
                    withCredentials: false
                },
                beforeSend(xhr) {
                    // 覆盖全局设置
                },
                success(data, statu) {
                    console.info('停止对讲成功');
                    self.resetCloseInterval();
                    self.isTalking = false;
                    if ($.isFunction(successCallback)) {
                        successCallback();
                    }
                },
                error(data, statu, error) {
                    if ($.isFunction(failCallback)) {
                        failCallback();
                    }
                }
            });
        };

        return _Class;
    }());
}).call(this);
