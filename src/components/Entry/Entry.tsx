import styled from "styled-components";

interface IEntry {
  location: string;
  date: string;
  description: string;
}

export default function Entry(props: IEntry) {
  const { location, date, description } = props;
  return (
    <Container>
      <Label>Date: </Label>
      <Value>{date}</Value>

      <Label>Location: </Label>
      <Value>{location}</Value>

      <Label>Description: </Label>
      <Value>{description}</Value>
    </Container>
  );
}

const Container = styled.div`
  text-align: left;
  background-color: #1a49d9;
  color: white;
  border-radius: 10px;
  padding: 20px;
  font-family: "Arial";
`;

const Label = styled.p`
  font-weight: bold;
`;

const Value = styled.p``;
