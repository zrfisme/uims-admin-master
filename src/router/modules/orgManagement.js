/* 系统管理路由 */
import Layout from '@/layout'
const systemManagementRouter = {
  path: '/orgManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'OrgManagement',
  meta: {
    title: 'orgManagement',
    icon: 'table'
  },
  children: [
    {
      path: 'sysUser',
      component: () => import('@/views/orgmanagement/sysUser/list'),
      name: 'sysUser',
      meta: { title: 'sysUser' }
    },
    {
      path: 'sysOrg',
      component: () => import('@/views/orgmanagement/sysOrg/list'),
      name: 'sysOrg',
      meta: { title: 'sysOrg' }
    },
    {
      path: 'sysRole',
      component: () => import('@/views/orgmanagement/sysRole/list'),
      name: 'sysRole',
      meta: { title: 'sysRole' }
    },
    {
      path: 'sysJob',
      component: () => import('@/views/orgmanagement/sysJob/list'),
      name: 'sysJob',
      meta: { title: 'sysJob' }
    },
    {
      path: 'dimension',
      component: () => import('@/views/orgmanagement/dimension/list'),
      name: 'dimension',
      meta: { title: 'dimension' }
    }
  ]
}

export default systemManagementRouter
