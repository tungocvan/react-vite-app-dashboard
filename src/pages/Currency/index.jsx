import currencyConverter from "~/components/currencyConverter"
import "~/pages/Currency/currency.scss"
export default function Currency() {
  const { ConverterForm } = currencyConverter
  return (
    <div className="wrapper-currency">
        <div className="currency-converter">
          <h2 className="converter-title">Currency Converter</h2>
          <ConverterForm />
        </div>
    </div>
    
  )
}
