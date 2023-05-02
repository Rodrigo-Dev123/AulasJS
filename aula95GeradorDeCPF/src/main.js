import geraCPF from './modules/geraCPF';
import './assets/css/styles.css';
import GeraCPF from './modules/geraCPF';

(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();  
})();