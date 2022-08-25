import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}){
        if (dish){
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
            return
        }     
    }

    function RenderComments({ comments }){
        if (comments){
            const comment = comments.map((comment) => {
                return(
                    <div key={comment.id} className="mt-4">
                        <li className="mt-1">{comment.comment}</li>
                        <li className="mt-1"> -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </div>  
                )
            })

            return (
                <div className="col-12 col-md-5 m-1">
                    <h2>Comments</h2>
                    <ul className="list-unstyled">
                        {comment}
                    </ul>
                </div>
            );
        }
        
    }


    const DishDetail = (props) => {
        if(props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                            <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
        

export default DishDetail;