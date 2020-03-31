let utils = {
    setAttri(element, attrs, value) {
        switch (attrs) {
            case 'style':
                element.style.cssText = value;
                break;
            case 'value':
                let tagName = element.tagName.toLowerCase();
                if (tagName == 'input' || tagName == 'textarea') {
                    element.value = value;
                } else {
                    element.setAttribute(attrs, value)
                }

                break;
            default:
                element.setAttribute(attrs, value);
                break;
        }
        // element.setAttribute(attrs, value)
    }
}
module.exports = utils;