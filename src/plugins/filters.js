import Vue from 'vue'
import _ from 'lodash'
let filtersPlugin = {};

filtersPlugin.install = function (Vue, options) {
  /*
  功能：根据传入的字典key，创建filter function
  参数：
    envkey: 对应store.Env的字典key
  */
    const createFilter = (envkey) => {
        return function (value) {
            if (value === '' || value === null || value === undefined || value === NaN) {
                return '';
            }
            let mapArray = _ws.store.state.Env[envkey];
            let findObj = _.find(mapArray, function (o) { return (o.value == value && o.value !== ''); });
            return findObj ? findObj.text : '';
        };
    };
  // 运营管理上架渠道
    const shelfTypeFilter = createFilter('shelfType');
  // 运营管理车辆状态
    const shelfNumFilter = createFilter('shelfNum');
  // 系统消息状态
    const pushStatusFilter = createFilter('pushStatus');
  // 车位限制
    const parkLimitFilter = createFilter('parkLimit');
  // 允许出入车辆
    const inOutTypeFilter = createFilter('inOutType');
  // 道闸类型
    const barrierTypeFilter = createFilter('barrierType');
  // 是否可用
    const isvalidFilter = createFilter('isvalid');
  // 库存限制
    const stockControlFilter = createFilter('stockControl');
  // 是否新车
    const carTimeFilter = createFilter('carTime');
  // 检测单位
    const testingUnitFilter = createFilter('testingUnit');
  // 车辆抵押状态
    const carMortgageFilter = createFilter('carMortgage');
  // 库存状态
    const storeStatusFilter = createFilter('storeStatus');
  // 区域
    const areaFilter = createFilter('area');
  // 交易状态
    const tradingStatusFilter = createFilter('tradingStatus');
  // 商户类型
    const commercialTypeFilter = createFilter('commercialType');
  // 开票类型
    const ticketTypeFilter = createFilter('ticketType');
  // 物业类型
    const propertyTypeFilter = createFilter('propertyType');
  // 租赁情况
    const rentStatusFilter = createFilter('rentStatus');
  // 合同状态
    const contractStatusFilter = createFilter('contractStatus');
  // 付款方式
    const payTypeFilter = createFilter('payType');
  // 缴费状态
    const paymentStatusFilter = createFilter('paymentStatus');
  // 车辆所属类型
    const carOwnerTypeFilter = createFilter('carOwnerType');
  // 车辆上架状态
    const carOperationStatusFilter = createFilter('carOperationStatus');
  // 库存天数
    const registerDayFilter = function (value) {
        if (value > 0 < 45) {
            return `<span style="color: green">${value}</span>`;
        } else if (value >= 45 < 60) {
            return `<span style="color: yellow">${value}</span>`;
        } else if (value >= 60 <= 90) {
            return `<span style="color: orange">${value}</span>`;
        } else if (value >= 90) {
            return `<span style="color: red">${value}</span>`;
        }
    };
  // 允许出入车辆
    const carOutShow = (show) => {
        var car = _ws.store.state.Env['inOutType']
        let b = '';
        show.map((val) => {
            car.map((data) => {
                if (val === data.value) {
                    b += data.text + ' ';
                }
            })
        })
        return b;
    };
  // 车类型
    const carTypeFilter = createFilter('carType');
  // 商户状态
    const commercialStatusFilter = createFilter('commercialStatus');
  // 空值过滤
    const emptyValueFilter = function (value) {
        return value || '---';
    };
  // 分数加减
  // const scoresAddSubtractFilter = createFilter('scoresAddSubtract');
    const scoresAddSubtractFilter = function (value) {
        if (value == 1) {
            return `<span style="color: red; font-size: 30px;">+</span>`
        } else if (value == 2) {
            return `<span style="color: blue; font-size: 30px;">-</span>`
        }
    };

    Vue.filter('carOutShow', carOutShow);
    Vue.filter('shelfTypeFilter', shelfTypeFilter);
    Vue.filter('shelfNumFilter', shelfNumFilter);
    Vue.filter('carTimeFilter', carTimeFilter);
    Vue.filter('carMortgageFilter', carMortgageFilter);
    Vue.filter('storeStatusFilter', storeStatusFilter);
    Vue.filter('areaFilter', areaFilter);
    Vue.filter('tradingStatusFilter', tradingStatusFilter);
    Vue.filter('commercialTypeFilter', commercialTypeFilter);
    Vue.filter('ticketTypeFilter', ticketTypeFilter);
    Vue.filter('propertyTypeFilter', propertyTypeFilter);
    Vue.filter('rentStatusFilter', rentStatusFilter);
    Vue.filter('contractStatusFilter', contractStatusFilter);
    Vue.filter('payTypeFilter', payTypeFilter);
    Vue.filter('paymentStatusFilter', paymentStatusFilter);
    Vue.filter('carOwnerTypeFilter', carOwnerTypeFilter);
    Vue.filter('carOperationStatusFilter', carOperationStatusFilter);
    Vue.filter('registerDayFilter', registerDayFilter);
    Vue.filter('carTypeFilter', carTypeFilter);
    Vue.filter('emptyValueFilter', emptyValueFilter);
    Vue.filter('commercialStatusFilter', commercialStatusFilter);
    Vue.filter('scoresAddSubtractFilter', scoresAddSubtractFilter);
    Vue.filter('testingUnitFilter', testingUnitFilter);
    Vue.filter('stockControlFilter', stockControlFilter);
    Vue.filter('isvalidFilter', isvalidFilter);
    Vue.filter('barrierTypeFilter', barrierTypeFilter);
    Vue.filter('inOutTypeFilter', inOutTypeFilter);
    Vue.filter('parkLimitFilter', parkLimitFilter);
    Vue.filter('pushStatusFilter', pushStatusFilter);
}
export default function () {
    return new Promise((resolve, reject) => {
        Vue.use(filtersPlugin)
        resolve()
    })
}
