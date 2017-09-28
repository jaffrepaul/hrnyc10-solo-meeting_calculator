notes:

modules:
- app: main, sets state -> passes down to child components -> handles interaction funcs -> renders all components

- navbar: contains logo, links, & styles to separate from body (might not need to be stateful - just render links)

- form: fields & button where user submits criteria for meeting cost

- results: calculated results & designs with save button - could display on form (might not need
state - just render results for submit)

- my meetings: displays list of saved meetingsListEntry (stateful)

- user login
- user sign in

// ==========

// 1. Set props on components in App.js -> pass them down and receive them in the child components
//
// 2. Set state in App.js
// - receive it component to render on page below
// state variable={this.state.variable}
// - console.log(this.props); in the child component file since state was passed down as props -> should see the data defined in App.js
//
// 3. Test to see if we're getting each state item in the child component:
//
//   render() {
//     let projectItems;
//
//     if (this.props.projects) {
//       projectItems = this.props.projects.map(project => {
//         console.log(project);
//       });
//     }
//
// If cool, add next child component in return of map to drop each item into it's own component with prop project={project}


// ==========

// Todo:

// methods:
// [] calculate meeting data
// [] click to save meeting data
// [] click on my meetings to render them


// ==========

// Test FE Data:

// this.setState({ meetings: [
//     {
//       name: 'test meeting',
//       duration: '60min',
//       attendees: 6,
//       salary: '101,000'
//     },
//     {
//       name: 'test meeting2',
//       duration: '45min',
//       attendees: 6,
//       salary: '105,000'
//     },
//     {
//       name: 'test meeting3',
//       duration: '600min',
//       attendees: 6,
//       salary: '600,000'
//     }
//   ]});
