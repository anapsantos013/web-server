// This is a JavaScript file
//ações de mudanças
$(document).on("click", "#listar", function(){
    $(location).attr("href","listar.html");
});
$(document).on ("click", "#salvar", function(){
   var parametros = {
     "nome":$("$nome").val(),
     "senha":$("#senha").val(),
     "email":$("#email").val()
   }

   $.ajax({
    type:"post", //como vou enviar os dados
    url:
    dataparametros,//o que vou enviar
    //se der certo
    success: function(data){
      navigator.notification.alerta(data);
      $("$nome").val(""),
      $("#senha").val(""),
      $("#email").val("")
    },
    //se der errado
    error: function(data){
      navigator.notification.alert("Erro de Cadastro");
    }
    });
});

function listar(){
   $.ajax({ 
       type:"post",
       url:"",
       datatype:"JSON",
       success:function(data){
         var itemlista = "";
         $.each(data.pessoas, function(i, dados){
           itemlista += "<option value="+dados.nome+"</option>"; 
           });
           $("#listapessoa").html(itemlista);
       },
       error: function(data){
      navigator.notification.alert("Erro ao buscar Registro");
       }
   });
}