import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail selectedDish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;