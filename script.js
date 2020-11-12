// En esta práctica debéis crear una clase "User" con tres propiedades. Estas propiedades son "name", "money" y "showMeTheMoney".
// En la clase debe haber un constructor para establecer el valor de cada una de estas propiedades en el orden en el que se han mencionado.
// Una vez esté lista la clase tenéis que crear una instancia de dicha clase para cada uno de los usuarios que obtengáis del documento "users.json" usando el método fetch (al igual que hicistéis en el ejercicio 3).
// Al recorrer el array de usuarios, en cada iteración, debéis usar las propiedades "name" y "money" del usuario del json para añadirle sus valores al constructor en el parámetro que establezca el valor de la propiedad del objeto con el mismo nombre.
// Por ejemplo: Para instanciar el primer usuario de la lista haremos "new User(usuarioDelJson.name, usuarioDelJson.money, metodoDelusuario)".
// El tercer parámetro de cada objeto recibirá una función que sacará con un alert la frase "dinero del usuario" (opcionalmente podéis sustituir esta frase por el dinero que tiene el usuario de esa instancia). Esta función la declararéis fuera de la clase con el nombre "showMeTheMoneyFunc".
// Cada instancia de "User" se irá añadiendo en el array "users" con el método "push".
// Una vez hayáis añadido todas las instancias al array de usuarios, ejecutad el método "showMeTheMoney" del tercer usuario "Roberto".

const users = [];

//Creamos la clase user tal como dice el enunciado
class User {
  constructor(name, money, func) {
    this.name = name;
    this.money = money;
    this.showMeTheMoney = func;
  }
}

//Definimos la funcion que meteremos por parametros al constructor, la cual mostrar en un alert el dinero del usuario y su nombre
function showMeTheMoneyFunc() {
  alert("Dinero de " + this.name + ": " + this.money);
}

//Hacemos el fetch del json
fetch("./users.json")
  .then(response => response.json())
  .then(data => {
    //Copiamos los datos en un array (sin copiar la referencia)
    let array = [...data];
    //Hacemos un map en el cual crearemos los users con el constructor
    array = array.map(u => new User(u.name, u.money, showMeTheMoneyFunc));
    //Hacemos push con un forEach sobre el array anterior
    array.forEach(u => users.push(u));
    //Usamos la funcion del tercer usuario (el 2 ya que empezamos por 0)
    users[2].showMeTheMoney();
  });
