import { Space, Table, Tag, Input } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
const { Search } = Input;

const columns = [
   {
      title: "Business Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
   },
   {
      title: "email",
      dataIndex: "email",
      key: "email",
   },
   {
      title: "Action",
      key: "action",
      render: (record) => <Link to={"detail/" + record.id}>Detail</Link>,
   },
];

const TableList = () => {
   const [post, setPost] = useState(null);
   const [search, setSearch] = useState(null);

   useEffect(() => {
      setPost(data);
      if (search) {
         let res = post.filter((item) => {
            return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search);
         });
         setPost(res);
      }
   }, [search]);

   if (!post) return <h1>Please Wait ...</h1>;

   return (
      <>
         <Search
            placeholder="input search text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            enterButton
         />
         <Table columns={columns} dataSource={post} />
      </>
   );
};
export default TableList;
