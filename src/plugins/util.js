import _ from 'lodash'
import Vue from 'vue'
const convertArrayFromCollection = function (collection) {
    let newArray = [];
    _.forEach(collection, function (value, key) {
        newArray.push(_.values(value));
    });
    return newArray;
}

const printTemplate = function (templateName = '', data = {}, cb) {
    if (!templateName) {
        throw new Error('params templateName is must be input');
    }
    sessionStorage.setItem('printTemplate', templateName);
    sessionStorage.setItem('printProps', JSON.stringify(data));

    var iframe = null
    if (!document.getElementById('print')) {
        iframe = document.createElement('iframe');
        iframe.id = 'print';
    } else {
        iframe = document.getElementById('print');
    }

    iframe.src = '/print';

    document.body.appendChild(iframe);

    let doPrint = function () {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    };
    Vue.nextTick(function () {
        doPrint();
    })
  // setTimeout(doPrint(), 1000)

    iframe.contentWindow.onafterprint = function () {
        console.log('onafterprint')
        document.body.removeChild(iframe);
        if (cb && typeof cb === 'function') {
            cb();
        }
    };
}
export { convertArrayFromCollection, printTemplate }
