function submitText(){
    var content=$("#editText").val();
    if(!content){
        alert('请先输入文本！')
        return;
    }else{
        $.ajax({
            url:'/editEveryDay',
            method:'post',
            data:content,
            success:function(data){
                alert(data)
                $("#editText").val("")
            },
            error:function(err){
                throw new Error(err)
            }
    
        })
    } 
}