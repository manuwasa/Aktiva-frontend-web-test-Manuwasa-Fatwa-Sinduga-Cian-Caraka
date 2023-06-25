import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { Card, Rate, Descriptions, Row, Col, Image } from "antd";

const { Meta } = Card;

function Detail() {
   let { id } = useParams();
   const [post, setPost] = useState(null);
   useEffect(() => {
      let res = data.find((item) => {
         return item.id === parseInt(id);
      });

      setPost(res);
   }, [post]);

   if (!post) return <h1>Please Wait ...</h1>;

   return (
      <>
         <Row justify={"center"}>
            <Col xl={12} className="myRow">
               <Card title={post.name}>
                  <Image src={post.image} style={{ maxWidth: 900 }} />
                  <Card type="inner" title="Details">
                     <Rate disabled value={post.rating} />
                     <h3>Email : {post.email}</h3>
                  </Card>
                  <Card
                     style={{
                        marginTop: 16,
                     }}
                     type="inner"
                     title="Reviews"
                     extra={<a href="#">More</a>}
                  >
                     {post.review}
                  </Card>
               </Card>
            </Col>
         </Row>
      </>
   );
}

export default Detail;
