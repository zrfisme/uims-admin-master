<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.sysName" :placeholder="$t('subsystem.sysName')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.allowDel" :placeholder="$t('subsystem.allowDel')" clearable style="width:110px" class="filter-item">
        <el-option v-for="item in allowDelOptions" :key="item.key" :label="item.display_name" :value="item.key" />
      </el-select>
      <el-select v-model="listQuery.isActive" :placeholder="$t('subsystem.isActive')" clearable style="width:110px" class="filter-item">
        <el-option v-for="item in isActiveOptions" :key="item.key" :label="item.display_name" :value="item.key" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('subsystem.search') }}
      </el-button>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-refresh" @click="handleFilter">
        {{ $t('subsystem.reset') }}
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        {{ $t('subsystem.add') }}
      </el-button>
    </div>

        <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column :label="$t('subsystem.id')" prop="id" sortable="custom" align="center" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('subsystem.sysName')" min-width="150px">
        <template slot-scope="{row}">
          <span class="link-type">{{ row.sysName }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('subsystem.sysLogo')" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sysLogo }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('subsystem.sysHomeUrl')" width="110px">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.sysHomeUrl" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.readings')" align="center" width="95">
        <template slot-scope="{row}">
          <span v-if="row.pageviews" class="link-type" @click="handleFetchPv(row.pageviews)">{{ row.pageviews }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.status')" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.actions')" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            {{ $t('table.edit') }}
          </el-button>
          <el-button v-if="row.status!='published'" size="mini" type="success" @click="handleModifyStatus(row,'published')">
            {{ $t('table.publish') }}
          </el-button>
          <el-button v-if="row.status!='draft'" size="mini" @click="handleModifyStatus(row,'draft')">
            {{ $t('table.draft') }}
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(row,'deleted')">
            {{ $t('table.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>
<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

const allowDelOptions = [
  { key: '1', display_name: '是' },
  { key: '0', display_name: '否' }
]

const isActiveOptions = [
  { key: '1', display_name: '是' },
  { key: '0', display_name: '否' }
]

export default {
  name: 'Subsystem',
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        sysName: undefined,
        allowDel: undefined,
        isActive: undefined,
        startDate: undefined,
        endDate: undefined,
        sort: '+id'
      },
      allowDelOptions,
      isActiveOptions
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleCreate() {

    },
    sortChange() {

    }
  }
}
</script>
