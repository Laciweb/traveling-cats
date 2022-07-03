import '../styles/styles.css'
import Person from './modules/Person';

if (module.hot) {
  module.hot.accept()
}

/*test code starts*/



var John = new Person("John Doe","purple");
John.greet();
var Jane = new Person("Jane Jen","red");
Jane.greet(); 