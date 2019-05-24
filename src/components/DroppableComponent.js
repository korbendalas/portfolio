import React from "react";

class DroppableComponent extends React.Component {
  state = {
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" }
    ]
  };

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter(task => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  };

  render() {
    var tasks = {
      wip: [],
      complete: []
    };

    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <h2 className="header">DROPPABLE DEMONSTRACIJA</h2>
        <h2 className="header">Prevucite iz jednog polja u drugo</h2>
        <div
          className="wip"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, "wip");
          }}
        >
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div>
        <div
          className="droppable"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "complete")}
        >
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>

        <h3>Opis tehnologije</h3>
        <p>
          Opširniji opis se može videti u mom seminarskom radu, koji možete
          skinuti na linkovima iznad. Ukratko o izabranoj tehnologiji u tekstu
          ispod
        </p>
        <p>
          jQuery je višeplatformska JavaScript biblioteka dizajnirana da
          pojednostavi skriptovanje sa korisničke strane jezika HTML. Too je
          najpopularnija JavaScript biblioteka u upotrebi danas koju koristi 65%
          od najposećenijih 10 miliona sajtova na internetu jQuery je slobodan i
          softver otvorenog izvornog koda licenciran pod MIT licencom. jQuery UI
          je kolekcija GUI vidžeta, animiranih vizuelnih efekata i tema
          implementiranih sa jQuery (JavaScript bibliotekama), Cascading Stile
          Sheets (CSS) i HTML
        </p>
        <p>
          Povlačenje i ispuštanje(drag and drop) je veoma česta karakteristika.
          To je kada &quot;zgrabite&quot; objekat i povučete ga na drugu
          lokaciju. Droppable vidžet koristi jQuery UI CSS okvir da stilizuje
          svoj izgled i osećaj. To je element koji se može ispustiti. Kada je
          aktiviran draggable koji može biti ispušten na ovom popisu, dodaje se
          ui-droppable-active class. Kada povlačite draggable preko ove
          droppable, dodaje se ui-droppable-hover klasa. jQueri obezbeđuje
          metodu droppable () da bi bilo koji DOM element mogao da se povuče na
          određenom cilju (cilj za elemente koji se mogu prevlačiti).
        </p>
      </div>
    );
  }
}

export default DroppableComponent;
