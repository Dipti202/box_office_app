import { styled } from 'styled-components';
//take as props and destructer object
function Details(props) {
    const {status,premiered,network}=props;
  return (

    //<div>
    <DetailsWrapper>
    <p>Status: {status}</p>
    <p>
        premiered:{premiered}
        {!!network && `on ${network.name}`}
    </p>
    </DetailsWrapper>
//</div>
  )
}

export default Details
const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;