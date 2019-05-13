/* 系统管理路由 */
import Layout from '@/layout'
const systemManagementRouter = {
  path: '/systemManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'SystemManagement',
  meta: {
    title: 'systemManagement',
    icon: 'component'
  },
  children: [
    {
      path: 'subSystem',
      component: () => import('@/views/systemmanagement/subsystem/list'),
      name: 'subSystem',
      meta: { title: 'subSystem' }
    },
    {
      path: 'resources',
      component: () => import('@/views/systemmanagement/resources/list'),
      name: 'resources',
      meta: { title: 'resources' }
    },
    {
      path: 'pwdStrategy',
      component: () => import('@/views/systemmanagement/pwdstrategy/list'),
      name: 'pwdStrategy',
      meta: { title: 'pwdStrategy' }
    },
    {
      path: 'sysFile',
      component: () => import('@/views/systemmanagement/sysfile/list'),
      name: 'sysFile',
      meta: { title: 'sysFile' }
    }
  ]
}

export default systemManagementRouter
