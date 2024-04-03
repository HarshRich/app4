 const HarshComponent = (props) => {
    const { Age, Name } = props?.studentsList;
    return (<>I'm from Harsh Component<h1>{Name}</h1><h1>{Age}</h1></>
    );
  };

export default HarshComponent;