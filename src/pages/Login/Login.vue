<template>
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm login-container">
 <el-form-item label="账号" prop="name">
  <el-input v-model="ruleForm.name"></el-input>
 </el-form-item>
  <el-form-item label="密码" prop="pass">
  <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
 </el-form-item>
 <el-form-item>
  <el-button type="primary" @click="submitForm">提交</el-button>
 </el-form-item>
 </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          { required: true, message: 'Type account', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: 'Type password', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
