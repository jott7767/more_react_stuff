class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.addList = this.addList.bind(this);
    this.baseUrl = `/boards/${this.props.id}/lists`;
    this.state = { lists: this.props.lists };
    this.goBack = this.goBack.bind(this);
  }

  addList(list) {
    this.setState({ lists: [list, ...this.state.lists] });
  }

   goBack() {
    window.location.href = '/boards';
  }

  render() {
    let lists = this.state.lists.map( list => {
      return(<List key={`list-${list.id}`} {...list} />);
    });

    return(
      <div className="row">
        <div>
          <NewList id={this.props.id} addList={this.addList} />
          <h2 className="col s12 center">Lists</h2>
          {lists}
        </div>
        <div className="col s12 m12 right-align">
          <hr />
          <button onClick={this.goBack} className='btn'>Back</button>
        </div>
      </div>
    );
  }
}