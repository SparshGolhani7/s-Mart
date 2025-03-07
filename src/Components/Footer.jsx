import { Layout, Row, Col, Typography, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Title } = Typography;

const FooterComponent = () => {
  return (
    <Footer style={{ background: "#f9f9f9", padding: "40px 80px" }}>
      <Row gutter={32}>
        {/* Useful Links */}
        <Col xs={24} sm={12} md={6}>
          <Title level={5}>Useful Links</Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["About", "Careers", "Blog", "Press", "Lead", "Value"].map(
              (link) => (
                <li key={link} style={{ marginBottom: "8px" }}>
                  <a href="#" style={{ color: "#333" }}>
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5}>&nbsp;</Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Privacy", "Terms", "FAQs", "Security", "Mobile", "Contact"].map(
              (link) => (
                <li key={link} style={{ marginBottom: "8px" }}>
                  <a href="#" style={{ color: "#333" }}>
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5}>Partner</Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Franchise", "Seller", "Warehouse", "Deliver", "Resources"].map(
              (link) => (
                <li key={link} style={{ marginBottom: "8px" }}>
                  <a href="#" style={{ color: "#333" }}>
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </Col>

        {/* Categories */}
        <Col xs={24} sm={12} md={6}>
          <Title level={5}>Categories</Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Vegetables & Fruits", "Bakery & Biscuits", "Beauty & Cosmetics", "Dairy & Breakfast", "Personal Care", "Electronics & Electricals"].map(
              (category) => (
                <li key={category} style={{ marginBottom: "8px" }}>
                  <a href="#" style={{ color: "#333" }}>
                    {category}
                  </a>
                </li>
              )
            )}
          </ul>
        </Col>
      </Row>

      <Divider />

      {/* Footer Bottom */}
      <Row justify="space-between" align="middle">
        <Col>
          <Text>
            © Blink Commerce Private Limited, 2016-2025 <CopyrightOutlined />
          </Text>
        </Col>
        <Col>
        <a href="https://www.facebook.com/sparsh.golhani/" target="_blank" rel="noopener noreferrer">
    <FacebookOutlined style={{ fontSize: "20px", marginRight: "15px" }} />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <TwitterOutlined style={{ fontSize: "20px", marginRight: "15px" }} />
  </a>
          <InstagramOutlined style={{ fontSize: "20px", marginRight: "15px" }} />
          <a href="https://www.linkedin.com/in/sparsh-golhani-65a4ba201" target="_blank" rel="noopener noreferrer">
    <LinkedinOutlined style={{ fontSize: "20px", marginRight: "15px" }} />
  </a>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
