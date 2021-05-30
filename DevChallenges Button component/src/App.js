import Button from "./common/button";
import GlobalStyle from "./globalStyle";
import { Row, Container } from "./layout";
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Row>
          <span>Default Button</span>
          <Button displayText="Default"></Button>
          <span>Disabled Shadow</span>
          <Button displayText="Default" disableShadow></Button>
        </Row>
        <Row>
          <span>Outline</span>
          <Button displayText="Default" variant="outline"></Button>
          <span>Only Text</span>
          <Button displayText="Default" variant="text"></Button>
        </Row>
        <Row>
          <span>Disabled</span>
          <Button displayText="Default" disabled></Button>
        </Row>
        <Row>
          <span>Icon at the start</span>
          <Button
            displayText="Default"
            startIcon="local_grocery_store"
            color="primary"
          ></Button>
          <span>Icon at the end</span>
          <Button
            displayText="Default"
            endIcon="local_grocery_store"
            color="secondary"
          ></Button>
        </Row>
        <Row>
          <span>Small</span>
          <Button displayText="Default" size="sm" color="primary"></Button>
          <span>Medium</span>
          <Button displayText="Default" size="md" color="primary"></Button>
          <span>Large</span>
          <Button displayText="Default" size="lg" color="primary"></Button>
        </Row>
        <Row>
          <span>Default Color</span>
          <Button displayText="Default" size="md" color="default"></Button>
          <span>Primary Color</span>
          <Button displayText="Default" size="md" color="primary"></Button>
          <span>Secondary Color</span>
          <Button displayText="Default" size="md" color="secondary"></Button>
          <span>Danger Color</span>
          <Button displayText="Default" size="md" color="danger"></Button>
        </Row>
        <Row>
          
          <span>Design Replicated by Hemanth N</span>
      

        </Row>
      </Container>
    </>
  );
}

export default App;
