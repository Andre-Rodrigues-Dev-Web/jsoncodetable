import styled from 'vue-styled-components';

export const divflex = styled.div`
display: flex;
flex-wrap: wrap;
flex-wrap: nowrap | wrap | wrap-reverse;
background: #FFFFFF;
border-radius: 12px;
margin: 20px;
`;
export const TitleDetalhe = styled.h1`
float: left;
height: 25px;
text-align: right;
position: relative;
z-index: 100;
margin-top: 20px;
padding-left: 20px;
flex: none;
order: 0;
flex-grow: 0;
margin: 8px 0px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 150%;
display: flex;
align-items: center;
color: #550073;
`;

export const saveButton = styled.button`
float: right;
margin: 0 20px 0 0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 24px;

width: 112px;
height: 48px;
background: #EF9E00;
border-radius: 32px;
font-family: Raleway;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;

`;
export const TableDetail = styled.div`
max-height: 70vh;
display: block;
overflow: auto;
z-index: 6;
table {
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  z-index: 6;
}
thead {
  background: #FFFFFF;
  box-shadow: inset 0px -1px 0px #e6e7edb3;
  opacity: 0.7;
  height: 44px;
}
th {
  text-align: center;
  border: 1px solid #F1F2F0;
  padding: 0 25px;
  font-size: 16px;
}
th span {
  display: flex;
  width: 100%;
}
.th_field {
  width: 100%;
}
.icon_field {
  display: none !important;
  width: 4%;
  cursor: pointer;
}
tr {
  height: 48px;
  background: #FFFFFF;
  box-shadow: inset 0px -1px 0px #E7E7EDB3;
}
td {
  text-align: left;
  border: 1px solid #F1F2F0;
  padding: 0 22px;
  text-align: center;
  vertical-align: middle;
}
td:last-child {
  border-left: block;
}
::-webkit-scrollbar {
  height: 10px;
  width: 4px;
  border: 1px solid #d5d5d5;
  background-color: white;
  box-shadow: none !important;
  background-image: none !important;
}
.error-message {
  text-align: center;
  margin: 1% 0;
  color: red;
}
.all-display-none {
  display: none;
}`;
export const UploadFile = styled.label`
  margin-left: 6px;
  color: #550073;
  font-size: 14px;
  line-height: 122%;
  height: 20px;
`;
export const FlexDiv = styled.div`
  display: flex;
`;
