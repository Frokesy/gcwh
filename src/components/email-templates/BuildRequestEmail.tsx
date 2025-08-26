import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
} from "@react-email/components";

interface BuildRequestEmailProps {
  name: string;
  phone: string;
  request: string;
}

export const BuildRequestEmail = ({
  name,
  phone,
  request,
}: BuildRequestEmailProps) => {
  return (
    <Html>
      <Head />
      <Body
        style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif" }}
      >
        <Container
          style={{
            margin: "20px auto",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "600px",
            border: "1px solid #eaeaea",
          }}
        >
          <Section>
            <Text
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              New Build Request 🚀
            </Text>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text>
              <strong>Request:</strong> {request}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
