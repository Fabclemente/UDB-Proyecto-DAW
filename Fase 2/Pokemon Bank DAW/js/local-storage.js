window.onload=function(){
    const btnDepositar = document.getElementById('btn-depositar')

    var montos = []

    btnDepositar.addEventListener("click",()=>{
    const montoDepositar = document.getElementById('monto-depositar').value
    var monto = localStorage.getItem("deposito")
    montos = monto ? JSON.parse(monto):[]
    montos.push(montoDepositar)
    localStorage.setItem("deposito", JSON.stringify(montos))
    })

    const btnRetirar = document.getElementById('btn-retirar')

    btnRetirar.addEventListener("click",()=>{
        const montoRetirar = document.getElementById('monto-retirar').value
        var monto = localStorage.getItem("retiro")
        montos = monto ? JSON.parse(monto):[]
        montos.push(montoRetirar)
        localStorage.setItem("retiro", JSON.stringify(montos))
    })

    let tipo
    var pagos = [{Tipo:'', Monto:''}]
    var select = document.getElementById('service');
    select.addEventListener('change',
        function(){
            var selectedOption = this.options[select.selectedIndex];
            tipo = selectedOption.text
        });

    const btnPago = document.getElementById('btn-pagar')

    btnPago.addEventListener("click",()=>{
        tipo = select.options[select.selectedIndex].text
        const montoPago = document.getElementById('monto-pagar').value
        var detalles = localStorage.getItem("pago")
        pagos = detalles ? JSON.parse(detalles):[]
        pagos.push({Tipo:tipo,Monto:montoPago})
        localStorage.setItem("pago", JSON.stringify(pagos))
    })
  }

