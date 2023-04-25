<template >
<div class="container">
    <s-header name="害虫识别"></s-header>

    <img class="preview" :src=imgurl >


    <div class="upload-box">
        
        <form @submit.prevent="uploadFile">
            <input type="file" ref="fileInput">
            <button type="submit">上传文件</button>
        </form>

    </div> 
    
    <div class="divid">
         <h1>害虫识别结果</h1>
    </div>

    <div class="dis-box"  >
        <div class="dis-item" v-for="item in disList" :key="item.id" >          

            <div class="dis">

                <h2 class="dis-title">描述:</h2>
                <text class="dis-text">{{ item.dis }}</text>
            </div>
            <div class="solve">
                <h2 class="dis-title">解决:</h2>
                <text class="solve-text">{{ item.solve }}</text>
            </div>
            
        </div>
    </div>    
</div>
    


</template>
<script>
import { ref, onMounted } from 'vue';
import sHeader from '@/components/SimpleHeader'
import { upload ,solve } from '@/service/protect'
export default {
    name:"Protect",
    components:{
        sHeader,
    },
    methods: {
        async uploadFile() {
            const file = this.$refs.fileInput.files[0];
            const formData = new FormData();
            formData.append('image', file);
            console.log('submit success formData',formData, )
            const res=await upload(formData)
            console.log('success',res)
            this.imgurl=res;
            const rp=solve(res)
            console.log('solve  success!:',rp)
        },
    },
    setup() {
    const loading = ref(true);
    const disList=ref([
        {'id':1 ,'dis': '这是一段这是一段息描述信息' ,'solve':'这是一段解方案这','imgUrl':"https://yuenongshop.oss-cn-hangzhou.aliyuncs.com/2e828f65-3bdc-448d-8724-a76a792e0b42.png"},
    ])
   const imgurl=ref("https://yuenongshop.oss-cn-hangzhou.aliyuncs.com/e9a36965-7aae-4e2d-ac9d-bb0dfc9eb431.png")
    

    onMounted(() => {
      loading.value = false;
    });

    return {
        imgurl,  
        disList,
    };
  },
}
</script>
<style lang="less" scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
}
.preview{
    height: 60px;
    width: 60px;
}
.upload-box{

    background-color: #f9f9fa;
    margin-top: 20%;
    width: 50%;
    box-shadow: 2px 1px 1px 0px #ADB5BD;
    border-radius: 5%;
}
.divid{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    height: 50px;
    width: 100%;
    background-color: #f9f9fa;
}
.dis-box{
    margin-top: 5%;
    width: 70%;
    .dis-item{
    display:flex ;
    flex-direction: column;
    margin: auto;
    margin-top: 5%;
    
    width: 90%;
    background-color: #f9f9fa;
    box-shadow: 2px 1px 1px 0px #ADB5BD;
    border-radius: 5%;
    flex-wrap: wrap; 
    min-height: 150px;
    max-height: none;
    max-height: fit-content;    

    .dis{
        background-color: #f9f9fa;
        margin-top: 5%;
        margin-left: 5%;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-content: flex-start;
        height: 40%;
        width: 70%;
        box-shadow: 1px 1px 1px 0px #ecedee;
        border-radius: 5%;
        .dis-title{
            margin-top: 0%;
        }
        .dis-text{
            margin-top: 9%;
            width: 95%;
        }
    }
    .solve{
        background-color: #f9f9fa;
        margin-top: 10%;
        margin-left: 5%;
        margin-bottom: 5%;
        display: flex;
        flex-direction: row;
        height: 40%;
        width: 70%;
        box-shadow: 1px 1px 1px 0px #ecedee;
        border-radius: 5%;
        .dis-title{
            margin-top: 0%;
       }
       .solve-text{
            margin-top: 9%;
            width: 95%;
       }
    }
    }

}


</style>