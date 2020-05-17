import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

export default class DishDetail extends React.Component {
    constructor(props){
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish){
        if(dish != null){
            let options = { year: 'numeric', month: 'short', day: 'numeric' };
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <div key = {comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, <span>{new Date(comment.date).toLocaleDateString("en-US", options)}</span></p>
                    </div>
                );
            });
            return (
                <Card>
                    <CardBody>
                      <CardTitle><h4>Comments</h4></CardTitle>
                      <CardText>{comments}</CardText>
                    </CardBody>
                </Card>
            );
        }else
            return (<div></div>);
    }

    render() {
        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}