import React, { Component } from 'react'

export class TodolistTable extends Component {

	state = {
		todolist: ['test', 'test1'],
		text: ""
	}

	handleonClick = () => {
		let todolist = this.state.todolist;
		todolist.push(this.state.text);
		this.setState({
			todolist,
			text: ""
		})
	}
	handleonClick1 = (i) => {
		let todolist = this.state.todolist;
		todolist.splice(i, 1);
		this.setState({
			todolist
		})
	}

	render() {
		let { todolist } = this.state
		return (
			<div>
				<input
					type='text'
					value={this.state.text}
					onChange={e => this.setState({ text: e.target.value })}
				/>
				<button type="button" onClick={this.handleonClick}>Add</button>
				{
					todolist.map((e, i) => {
						return (
							<div key={i}>
								{e}
								<button type="button" onClick={()=>this.handleonClick1(i)}>
								delete
							</button>
							</div>
						
						)
					})
				}
			</div>
		)
	}
}