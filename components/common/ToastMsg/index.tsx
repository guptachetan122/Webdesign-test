import { Col, Row } from "antd";
import ButtonDark from "../Button/ButtonDark";
import ButtonLight from "../Button/ButtonLight";

export const UnpinMsg = ({ closeToast }: any) => (
  <div style={{ width: "100%"}}>
    <Row>
      are you sure you want to unpin simplifying personal finance for women
      clubhouse ?
    </Row>
    <br />
    <Row>
      <Col>
        <ButtonLight name="yes, unpin!" />
      </Col>
      <Col>
        <ButtonDark name="no, cancel" />
      </Col>
    </Row>
  </div>
);

export const PinMsg = ({ closeToast }: any) => (
  <Row style={{ width: "100%"}}>
    <Row>
      you have pinned 📌 simplifying personal finance for women at the top. you
      can pin upto 5 clubhouses
    </Row>
    <br />
    <Row>
      <Col>
        <ButtonLight name="yes, pin!" />
      </Col>
      <Col>
        <ButtonDark name="no, cancel" />
      </Col>
    </Row>
  </Row>
);

export const MaxMsg = ({ closeToast }: any) => (
  <Row>
    <Row>
      you have pinned 5 and reached the maximum limit. you have to remove one or
      more to pin simplifying personal finance for women
    </Row>
    <br />
    <Row>
      <ButtonLight name="got it!" />
    </Row>
  </Row>
);
