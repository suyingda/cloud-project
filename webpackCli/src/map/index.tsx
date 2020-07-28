import React, {useEffect} from 'react';

let T: any;

export default function Map(props: any) {
    const Api = () => {
        // console.log(new T.map('mapDiv'))
        /* fetch('http://t0.tianditu.gov.cn/vec_c/wmts?tk=1debf89e9589159308c0a38a067ec9bf')
             .then(function (response) {
                 console.log(response.json())
                 return response.json();
             })
             .then(function (myJson) {
                 console.log(myJson);
             });*/
    }
    const onLoad = () => {
        if (window) {
            Object.keys(window).forEach((items: any) => {
                const T = window[items] || {};
                const {
                    Version,
                    Map,
                    Marker,
                    LngLat,
                    MarkerClusterer,
                }: {
                    Version?: any,
                    Map?: any,
                    Marker?: any,
                    LngLat?: any,
                    MarkerClusterer?: any,
                } = T;
                if (Version) {
                    console.log(window[items])
                    const zoom = 3;
                    let map;
                    map = new Map('mapDiv', {
                        attributionControl: false,
                        inertia: false
                    });
                    map.centerAndZoom(new LngLat(116.40969, 37.43997405227057), zoom);
                    var arrayObj = new Array();
                    for (var i = 0; i < 666; i++) {
                        var marker = new Marker(new LngLat(Math.random() * 40 + 85, Math.random() * 30 + 21), {title: i});
                        arrayObj.push(marker);
                    }
                    const markers = new MarkerClusterer(map, {markers: arrayObj});
                }
            })
        }


    }

    useEffect(() => {
        const createMap = document.createElement('script');
        createMap.src = "http://api.tianditu.gov.cn/api?v=4.0&tk=1debf89e9589159308c0a38a067ec9bf";
        createMap.setAttribute("type", "text/javascript");
        // createMap.setAttribute('SameSite', "None");
        // createMap.setAttribute('crossorigin', "anonymous");
        const gainId = document.querySelector('body');
        console.log(createMap, 123)
        gainId.appendChild(createMap);
        onLoad();
        window.onloadstart = function () {
            console.log(1)
        }

    }, [])
    return <div id={'mapDiv'} style={{
        width: '100%',
        height: "400px"
    }}>
        666666666666666666666
    </div>
}
