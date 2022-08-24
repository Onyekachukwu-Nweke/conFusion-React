import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish){
        if (dish != null){
            return(         
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }     
    }

    renderComments(commentProp){
        if (commentProp != null){
            const comments = commentProp.map((objcomment) => {
                return(
                    <div key={objcomment.id}>
                        <li className="mt-3">{objcomment.comment}</li>
                        <li className="mt-3"> -- {objcomment.author}, {objcomment.date}</li>
                    </div>  
                )
            })

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <list type="unstyled">
                        {comments}
                    </list>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }


    render(){
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                {this.renderComments(this.props.selectedDish.comments)}
            </div>
        );
    }
}

export default DishDetail;