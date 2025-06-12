import styled from "styled-components";

export const Wrapper = styled.main`
  font-family: "Inter", sans-serif;
`;

export const Highlight = styled.span`
  background: linear-gradient(to right, #6366f1, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FeatureCard = styled.div.attrs({
  className:
    "bg-gray-50 rounded-2xl shadow-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2",
})`
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #4b5563;
  }
`;

export const Icon = styled.div`
  font-size: 2.5rem;
`;