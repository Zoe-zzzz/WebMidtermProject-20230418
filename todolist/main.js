let tf=[0,0,0];
$(function(){
    $("[type='checkbox']").on("change",updateprogress);
});
function updateprogress(){
    let hascheck=0;
    
    for(let x=0;x<$("[type='checkbox']").length;x++)
    {
        if($("[type='checkbox']")[x].checked)
        {
            //  console.log($("[type='checkbox']")[x].value);
            hascheck+=1;
            tf[x]=1;
            $("span").eq(x).css("text-decoration","line-through");
            $("span").eq(x).css("color","#aaa");
        }
        else{
            if(tf[x]!=0)
            {
                // console.log(x);
                 $("span").eq(x).css("text-decoration","none");
                 $("span").eq(x).css("color","");
            }
        }
        
        
    }
    $("meter").attr("max",$("[type='checkbox']").length);
    $("meter").attr("value",hascheck);
}