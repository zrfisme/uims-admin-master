/* 系统管理路由 */
import Layout from '@/layout'
const systemManagementRouter = {
  path: '/sysLog',
  component: Layout,
  redirect: 'noRedirect',
  name: 'sysLog',
  meta: {
    title: 'sysLog',
    icon: 'table'
  },
  children: [
    {
      path: 'sysLogSwitch',
      component: () => import('@/views/systemmanagement/sysAudit/sysLogSwitch/list'),
      name: 'sysLogSwitch',
      meta: { title: 'sysLogSwitch' }
    },
    {
      path: 'loginLog',
      component: () => import('@/views/systemmanagement/sysAudit/loginLog/list'),
      name: 'loginLog',
      meta: { title: 'loginLog' }
    },
    {
      path: 'sysLog',
      component: () => import('@/views/systemmanagement/sysAudit/sysLog/list'),
      name: 'sysLog',
      meta: { title: 'sysLog' }
    },
    {
      path: 'sysError',
      component: () => import('@/views/systemmanagement/sysAudit/sysErrorLog/list'),
      name: 'sysError',
      meta: { title: 'sysError' }
    }
  ]
}

export default systemManagementRouter
