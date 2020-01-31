import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Nav, Container, Row, Col, Tabs, Tab } from "react-bootstrap";

function App() {
  const [activeKey, setActiveKey] = useState("1");
  const [collapse, setCollapse] = useState(false);

  const handleSelectKey = key => {
    if (key === activeKey) {
      if (!collapse) setActiveKey("");
      setCollapse(!collapse);
    } else {
      setActiveKey(key);
      setCollapse(false);
    }
  };

  return (
    <div className="App">
      <Tab.Container
        id="left-tabs-example"
        activeKey={activeKey}
        onSelect={handleSelectKey}
      >
        <div
          style={{
            width: "100%",
            minHeight: "100vh"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "grey",
              position: "absolute",
              width: 80,
              height: "100%",
              zIndex: 5000
            }}
          >
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="1">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content
            style={{
              width: 200,
              border: "1px solid red",
              position: "absolute",
              marginLeft: 80,
              transition: "transform 0.2s ease-out",
              transform: collapse ? "translateX(-300px)" : "translateX(0)",
              minHeight: 500
            }}
          >
            <Tab.Pane eventKey="1">1</Tab.Pane>
            <Tab.Pane eventKey="2">2</Tab.Pane>
            <Tab.Pane eventKey="3">3</Tab.Pane>
          </Tab.Content>
          <div
            style={{
              display: "flex"
            }}
          >
            <main
              style={{
                border: "1px solid blue",
                width: "100%",
                marginLeft: collapse ? 80 : 280,
                transition: "margin 0.2s ease-out",
                minHeight: 500
              }}
            >
              <Container>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Aliquam faucibus purus in massa tempor nec feugiat nisl. Sit
                amet purus gravida quis blandit turpis cursus. In massa tempor
                nec feugiat nisl pretium fusce. Imperdiet nulla malesuada
                pellentesque elit eget gravida cum sociis natoque. Faucibus
                scelerisque eleifend donec pretium vulputate sapien nec. Egestas
                dui id ornare arcu odio ut sem nulla. Ut enim blandit volutpat
                maecenas volutpat blandit aliquam. Pretium nibh ipsum consequat
                nisl vel. Egestas dui id ornare arcu odio ut sem nulla pharetra.
                Massa tempor nec feugiat nisl. Vitae semper quis lectus nulla.
                Dignissim suspendisse in est ante in nibh mauris cursus. Congue
                eu consequat ac felis donec. Neque laoreet suspendisse interdum
                consectetur libero id faucibus. Ultrices gravida dictum fusce ut
                placerat orci. Tellus integer feugiat scelerisque varius morbi
                enim nunc faucibus. Lacinia quis vel eros donec. Dui sapien eget
                mi proin sed libero enim sed. Est lorem ipsum dolor sit amet
                consectetur adipiscing. Ultricies mi eget mauris pharetra et
                ultrices. Nascetur ridiculus mus mauris vitae ultricies. Sed
                viverra tellus in hac habitasse platea dictumst vestibulum.
                Tempor commodo ullamcorper a lacus vestibulum sed. Faucibus
                ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent
                tristique magna sit amet purus gravida. Ultrices tincidunt arcu
                non sodales neque sodales ut etiam sit. Sed felis eget velit
                aliquet sagittis id consectetur purus ut. Lobortis feugiat
                vivamus at augue. Consectetur lorem donec massa sapien faucibus
                et molestie ac. Aenean vel elit scelerisque mauris. A
                pellentesque sit amet porttitor eget. Id nibh tortor id aliquet
                lectus proin nibh. Nulla facilisi nullam vehicula ipsum a arcu
                cursus vitae congue. Platea dictumst vestibulum rhoncus est
                pellentesque elit ullamcorper. Est ultricies integer quis
                auctor. Laoreet non curabitur gravida arcu ac tortor dignissim
                convallis. Tortor posuere ac ut consequat. Maecenas accumsan
                lacus vel facilisis volutpat est. Amet mattis vulputate enim
                nulla. Turpis nunc eget lorem dolor sed viverra ipsum. At urna
                condimentum mattis pellentesque id nibh. Suscipit adipiscing
                bibendum est ultricies integer quis auctor. Interdum velit
                euismod in pellentesque massa placerat. Ac feugiat sed lectus
                vestibulum mattis ullamcorper. At risus viverra adipiscing at in
                tellus integer feugiat. Risus sed vulputate odio ut enim.
                Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae.
                Vel pretium lectus quam id leo in vitae turpis massa. Erat
                pellentesque adipiscing commodo elit at imperdiet dui accumsan
                sit. Nulla pellentesque dignissim enim sit amet. Elementum
                curabitur vitae nunc sed. Aliquam etiam erat velit scelerisque
                in dictum non. Diam vel quam elementum pulvinar. Eget sit amet
                tellus cras adipiscing enim. Cras ornare arcu dui vivamus. Quam
                lacus suspendisse faucibus interdum posuere lorem. Vel fringilla
                est ullamcorper eget nulla facilisi etiam. Arcu dictum varius
                duis at consectetur lorem. Senectus et netus et malesuada fames.
                In hendrerit gravida rutrum quisque non. Aliquam purus sit amet
                luctus. Porttitor rhoncus dolor purus non enim praesent
                elementum facilisis. Gravida neque convallis a cras. Nec nam
                aliquam sem et tortor consequat. Lacus viverra vitae congue eu
                consequat ac felis donec. Mauris rhoncus aenean vel elit.
                Consequat id porta nibh venenatis cras sed felis eget. Urna et
                pharetra pharetra massa massa ultricies mi. Ipsum dolor sit amet
                consectetur. Tristique senectus et netus et malesuada fames ac
                turpis egestas. Donec ultrices tincidunt arcu non. Turpis
                egestas sed tempus urna et pharetra pharetra massa.
              </Container>
            </main>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
}

export default App;
