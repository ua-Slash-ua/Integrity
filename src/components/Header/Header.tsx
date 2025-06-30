export default function Header({ logo, buttonText }: { logo?: string; buttonText?: string }) {
    return (
      <header>
        <div dangerouslySetInnerHTML={{ __html: logo || '' }} />
        <button>{buttonText}</button>
      </header>
    );
  }