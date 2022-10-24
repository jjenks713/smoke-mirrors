import Link from "next/link"

export default function ContactBody() {

    return (
        <div className="text-center">
            <div className="text-7xl"><Link href="/">make a reservation</Link></div>
            <div className="inline-block align-middle text-4xl py-14">
                <div>or call us</div>
                <div>801-555-555</div>
            </div>
            <div style={{ maxWidth: "500" }} className="rounded-2xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.140513700237!2d-111.89216408435888!3d40.73693354402638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f5324dfd1441%3A0x7a6aa4ab345007a0!2s25%20Kensington%20Ave%2C%20Salt%20Lake%20City%2C%20UT%2084115!5e0!3m2!1sen!2sus!4v1666654022736!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: "0", borderRadius: "25px" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}