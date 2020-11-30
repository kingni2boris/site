<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="inscription.css">
    <link rel="stylesheet" href="navbar.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Document</title>
</head>
<body>
    <fieldset>
        <div class="formulaire">
            <form action="users.php.php" method="POST">
                <div class=" formulaire-content ">
                    <input type="text" name="nom"id="nom" placeholder="Nom"><i id="juste" style="color:green;margin-left:-14px;display:none" class="fa fa-check-square"></i></input>
                    <p id="p1">Le champ nom est mal remplit</p>
                    <input type="text" id="prenom" name="prenom" placeholder="Prenom"><i id="juste2" style="color:green;margin-left:-14px;display:none" class="fa fa-check-square"></i></input>
                    <p id="p2">le champ prenom est mal remplit</p>
                    <input type="email" name="email"placeholder="Adresse email" id="email"><i id="juste3" style="color:green;margin-left:-14px;display:none" class="fa fa-check-square"></i></input>
                    <p id="p3">Le champ email est mal remplit</p>
                    <input type="tel" name="telephone" id="telephone" placeholder="Numero de telephone "><i id="juste4" style="color:green;margin-left:-14px;display:none" class="fa fa-check-square"></i></input>
                    <p id="p4">le champ telephone est mal remplit</p>
                    <input type="password" id="password" name="password"placeholder="Password "><i id="juste5" style="color:green;margin-left:-14px;display:none" class="fa fa-check-square"></i></input>
                    <p id="p5">La taille du mot de passe est inferieur a 8</p>
                    <button type="submit" id="send">S'inscrire</button>
                </div>
            </form>
        </div>


    </fieldset>
    <script>
                var nom = $("#nom"),
                prenom = $("#prenom"),
                email = $("#email"),
                telephone = $("#telephone"),
                password = $("#password");
                juste= $("#juste");
                juste2= $("#juste2");
                juste3= $("#juste3");
                juste4= $("#juste4");
                juste5= $("#juste5");
            $(document).ready(function(){
                $("#nom").keydown(function(){
                   if( $("#nom").val().trim().length<5){
                        $("#nom").css("border","3px solid red");
                        $("#juste").css("display","none");
                   }else{
                       $("#nom").css("border","3px solid green");
                       $("#juste").css("display","block");
                       $("#juste").css("margin-top","-23px");
                       $("#juste").css("margin-left","220px");
                   }
                }); 
            })
            $(document).ready(function(){
                $("#prenom").keydown(function(){
                   if( $("#prenom").val().trim().length<3){
                        $("#prenom").css("border","3px solid red");
                        $("#juste2").css("display","none");
                   }else{
                       $("#prenom").css("border","3px solid green");
                       $("#nom").css("border","3px solid green");
                       $("#juste2").css("display","block");
                       $("#juste2").css("margin-top","-23px");
                       $("#juste2").css("margin-left","220px");
                   }
                }); 
            })
            $(document).ready(function(){
                $("#email").keydown(function(){
                   if( $("#email").val().trim().length<=8){
                        $("#email").css("border","3px solid red");
                        $("#juste3").css("display","none");
                   }else{
                       $("#email").css("border","3px solid green");
                       $("#nom").css("border","3px solid green");
                       $("#juste3").css("display","block");
                       $("#juste3").css("margin-top","-23px");
                       $("#juste3").css("margin-left","220px");
                   }
                }); 
            })
            $(document).ready(function(){
                $("#telephone").keydown(function(){
                   if( $("#telephone").val().trim().length<=8){
                        $("#telephone").css("border","3px solid red");
                        $("#juste4").css("display","none");
                   }else{
                       $("#telephone").css("border","3px solid green");
                       $("#nom").css("border","3px solid green");
                       $("#juste4").css("display","block");
                       $("#juste4").css("margin-top","-23px");
                       $("#juste4").css("margin-left","220px");
                   }
                }); 
            })
            $(document).ready(function(){
                $("#password").keydown(function(){
                   if( $("#password").val().trim().length<=8){
                        $("#password").css("border","3px solid red");
                        $("#juste5").css("display","none");
                   }else{
                       $("#password").css("border","3px solid green");
                       $("#nom").css("border","3px solid green");
                       $("#juste5").css("display","block");
                       $("#juste5").css("margin-top","-23px");
                       $("#juste5").css("margin-left","220px");
                   }
                }); 
            })
    </script>
    <?php 
                     
             if(isset($_POST['nom']) 
             && isset($_POST['prenom']) 
             && isset($_POST['email']) 
              && isset($_POST['telephone']) 
              && isset($_POST['password']))
              {
                  if(!empty($_POST['nom']) && strlen($_POST['nom']>6) 
                  && !empty($_POST['prenom']) && strlen($_POST['prenom']<6)
                   && !empty($_POST['email']) && strlen($_POST['email']>7)
                  && !empty($_POST['telephone']) && strlen($_POST['telephone'])>9
                    && !empty($_POST['password'])  && strlen($_POST['password'])>10
                    ){
                    $bdd= new PDO('mysql:host=localhost;dbname=site','root','');
                     $req=$bdd->prepare('INSERT INTO utilisateurs
                     (utilisteur_ID,name_utilisateur,prenom_utilisateur,email_utilisateur,telephone_utilisateur,password_utilisateur)
                     VALUES (:ID,:nom,:prenom,:email,:telephone,:password)');
                     $req->bindValue(':nom',$_POST['nom']);
                     $req->bindValue(':prenom',$_POST['prenom']);
                     $req->bindValue(':email',$_POST['email']);
                     $req->bindValue(':telephone',$_POST['email']);
                     $req->bindValue(':password',$_POST[' password']);
                  }
                 else if(empty($_POST['nom']) || strlen($_POST['nom'])<10) {
                     

                 }
                 
               
              } 
             
    
    
    ?>
                   
  



 
</body>
</html>

