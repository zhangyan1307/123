import Vue from 'vue'
import Router from 'vue-router'
import Index from "../views/Index/index";//找医生组件
import Login from "../views/Login/login";//登入组件
import ConsultingRoom from "../views/Index/ConsultingRoom/consultingRoom"//诊室组件
import SearchDoctor from "../views/Index/SearchDocter/searchDoctor"//找医生组件
import User from "../views/Index/User/user.vue"//个人中心组件
import ChooseExpert from '../views/Index/SearchDocter/ChooseExpert/chooseExpert' //选择专家组件
import HospitalRegister from '../views/Index/SearchDocter/HospitalRegister/hospitalRegister'//预约挂号组件
import AppointmentGuidance from '../views/Index/SearchDocter/AppointmentGuidance/appointmentGuidance'//导诊预约组件
import IntroductionDoctor from '../views/Index/SearchDocter/IntroductionDoctor/introductionDoctor'//医生介绍组件
import AppointmentExamination from '../views/Index/SearchDocter/AppointmentExamination/appointmentExamination'//预约体检组件
import AppointmentRecord from '../views/Index/SearchDocter/AppointmentRecord/appointmentRecord'//预约体检记录
import ChooseHospital from '../views/Index/SearchDocter/AppointmentExamination/ChooseHospital'//选择医院组件
import HospitalDetails from '../views/Index/SearchDocter/AppointmentExamination/HospitalDetails'//医院检查项目详情
import ExaminationContent from '../views/Index/SearchDocter/AppointmentExamination/ExaminationContent'//体检内容组件
import Appointmentinformation from '../views/Index/SearchDocter/AppointmentExamination/appointmentinformation'//预约信息表格组件
import OutpatientPayment from '../views/Index/SearchDocter/OutpatientPayment/OutpatientPayment'//门诊缴费组件
import HospitalizationReserve from '../views/Index/SearchDocter/HospitalizationReserve/HospitalizationReserve'//住院预存组件
import AddVisitors from '../views/Index/SearchDocter/AddVisitors/AddVisitors'//添加就诊人组件
import Payment from '../views/Index/SearchDocter/OutpatientPayment/Payment'//缴费组件
import SaveMoney from '@/views/Index/SearchDocter/Savemoney/Savemoney'//存钱组件
import PaymentRecords from '@/views/Index/SearchDocter/PaymentRecords/PaymentRecords'//缴费记录
import Remind from '@/views/Index/SearchDocter/Remind/Remind'//导诊提醒组件
import InspectionReport from '@/views/Index/SearchDocter/InspectionReport/InspectionReport'//检验报告组件
import report from '@/views/Index/SearchDocter/InspectionReport/report'//真正的检验报告组件
import DetailedReport from '@/views/Index/SearchDocter/InspectionReport/DetailedReport'//详细检验报告
import CheckReport from '@/views/Index/SearchDocter/CheckReport/CheckReport'//真正的检查报告组件
import Inspect from '@/views/Index/SearchDocter/CheckReport/inspect'
import Detail from '@/views/Index/SearchDocter/CheckReport/Detail'//检查详情报告组件
import InpatientList from '@/views/Index/SearchDocter/InpatientList/InpatientList'//住院清单组件
import PriceInquiry from '@/views/Index/SearchDocter/PriceInquiry/PriceInquiry'//物价查询组件
import OutpatientList from '@/views/Index/SearchDocter/OutpatientList/OutpatientList'//门诊清单组件
import MedicalCard from '@/views/Index/User/MedicalCard/MedicalCard'//就诊卡管理组件
import CommercialInsurance from '@/views/Index/User/CommercialInsurance/CommercialInsurance'//商业保险组件
import Setting from '@/views/Index/User/Setting/Setting'//设置组件
import ElectronicSocialSecurityCard from '@/views/Index/User/ElectronicSocialSecurityCard/ElectronicSocialSecurityCard'//电子社保卡组件
import RehabilitationGuidelines from '@/views/Index/User/RehabilitationGuidelines/RehabilitationGuidelines'//康复指引组件
import MyInvoice from '@/views/Index/User/MyInvoice/MyInvoice'//我的发票组件
import MedicalRecords from '@/views/Index/User/MedicalRecords/MedicalRecords'//就诊记录
import ChoosingPhysician from '@/views/Index/SearchDocter/ChoosingPhysician/ChoosingPhysician'//选择医师组件
import IntroductionOfExperts from '@/views/Index/SearchDocter/IntroductionOfExperts/IntroductionOfExperts'//挂号跳转专家介绍组件
import GeneralInformationOfDoctors from '@/views/Index/ConsultingRoom/GeneralInformationOfDoctors/GeneralInformationOfDoctors'//医生综合信息组件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index/searchDocter"
    },
    {
      path: "/chooseExpert",
      component: ChooseExpert
    },
    {
      path: "/hospitalRegister",
      component: HospitalRegister
    },
    {
      path: "/appointmentguidance",
      component: AppointmentGuidance
    },
    {
      path: "/introductionDoctor",
      component: IntroductionDoctor
    },
    {
      path: "/appointmentExamination",
      component: AppointmentExamination,
      children: [
        {
          path: 'chooseHospital',
          component: ChooseHospital
        },
        {
          path: 'hospitalDetails',
          component: HospitalDetails
        },
        {
          path: 'examinationContent',
          component: ExaminationContent
        },
        {
          path: 'appointmentinformation',
          component: Appointmentinformation
        },
      ]
    },
    {
      path: "/appointmentRecord",
      component: AppointmentRecord
    },
    {
      path: "/outpatientPayment/:top",
      component: OutpatientPayment
    },
    {
      path: "/hospitalizationReserve",
      component: HospitalizationReserve
    },
    {
      path: "/payment",
      component: Payment
    },
    {
      path: "/addVisitors",
      component: AddVisitors
    },
    {
      path:"/saveMoney",
      component:SaveMoney
    },
    {
      path:'/paymentRecords',
      component:PaymentRecords
    },
    {
      path:'/remind',
      component:Remind
    },
    {
      path:'/inspectionReport',
      component:InspectionReport
    },
    {
      path:'/report',
      component:report
    },
    {
      path:'/DetailedReport',
      component:DetailedReport
    },
    {
      path:'/checkReport',
      component:CheckReport
    },
    {
      path:'/inspect',
      component:Inspect
    },
    {
      path:'/Detail',
      component:Detail
    },
    {
      path:'/InpatientList',
      component:InpatientList
    },
    {
      path: '/Priceinquiry',
      component: PriceInquiry
    },
    {
      path: '/OutpatientList',
      component: OutpatientList
    },
    {
      path:'/MedicalCard',
      component:MedicalCard
    },
    {
      path:'/CommercialInsurance',
      component:CommercialInsurance
    },
    {
      path:'/Setting',
      component:Setting
    },
    {
      path:'/ElectronicSocialSecurityCard',
      component:ElectronicSocialSecurityCard
    },
    {
      path:'/RehabilitationGuidelines',
      component:RehabilitationGuidelines
    },
    {
      path:'/MyInvoice',
      component:MyInvoice
    },
    {
      path:'/MedicalRecords',
      component:MedicalRecords
    },
    {
      path:'/ChoosingPhysician',
      component:ChoosingPhysician
    },
    {
      path:'/IntroductionOfExperts',
      component:IntroductionOfExperts
    },
    {
      path:'/GeneralInformationOfDoctors',
      component:GeneralInformationOfDoctors
    },
    {
      path: "/index",
      component: Index,
      children: [{
        path: "consultingRoom",
        component: ConsultingRoom
      },
      {
        path: "searchDocter",
        component: SearchDoctor
      },
      {
        path: "user",
        component: User
      }]
    },
    {
      path: "/login",
      component: Login
    }
  ]
})
