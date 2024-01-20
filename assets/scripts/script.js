const listaDeTareas = document.querySelector("#tareas")
const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const cuentaTareas = document.querySelector("#cuenta-tareas");
const tareasRealizadas = document.querySelector("#realizadas")

const tareas = [
    {
        id: 1,
        tarea: "Hacer Mercado",
        completado: false
    },
    {
        id: 2,
        tarea: "Estudiar",
        completado: false
    },
    {
        id: 3,
        tarea: "Pasear a Tobby",
        completado: false
    }
]

function renderInicial() {
    let html = ""
    let htmlId = ""
    for (let tarea of tareas) {
        html += `<li>${tarea.id}${tarea.tarea} <button onclick="borrar(${tarea.id})">eliminar</button><button onclick="cambiar(${tarea.id})">cambiar</button></li>`;
    }

    listaDeTareas.innerHTML = html;
    cuentaTareas.innerHTML = `Total: ${tareas.length}`;    
}
renderInicial()



btnAgregar.addEventListener("click", () => {
    const tarea = tareaInput.value
    tareas.push({id: tareas.length+1, tarea: tarea, completado: false})
    tareaInput.value = ""
    renderTareas()
});

function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderTareas()
}

function cambiar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    if (index !== -1){
    tareas[index].completado = !tareas[index].completado
    renderTareas()
    }
}

function renderTareas() {
    let html = "";
    for (let tarea of tareas) {
        html += `<li>${tarea.id}${tarea.tarea} <button onclick="borrar(${tarea.id})">eliminar</button><button onclick="cambiar(${tarea.id})">cambiar</button></li>`;
    }

    listaDeTareas.innerHTML = html;
    cuentaTareas.innerHTML = `Total: ${tareas.length}`;
    const completas = tareas.filter((tarea) => tarea.completado).length;
    tareasRealizadas.innerHTML = `Realizadas: ${completas}`;
}