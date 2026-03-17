export default function TeamStaff() {
  const staffMembers = [
    {
      name: 'Elena V.',
      role: 'Lead Dental Hygienist',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdl24-QWB_Gkyx7ZurOI4Ujw0FewKhiKi9nlkOD_jPQ6A2SgxM_SBuZdtPRlXoMMrAvZIAU8FLVrPYJ8QTR1IcrF_l6WQnIuGnSjNKFGmWSVugt1oxrKsw2kz_4_QKVnxHUVOFhyaOBV0xMJb6817S22WlSe-DD8wzjKMNCZ0evjYpGwE-6HTbLjSvu1plO-dwQUdB9Lt96nO66OEmfzV5brrWemluOzjqJBPSDq0igw_54idAK6Xv-IAXZS-YFAvaplpkUWng-Q8',
    },
    {
      name: 'Marcus T.',
      role: 'Practice Manager',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHBt2azr3Kn-vv8h0RpCdnPmt8V4HEXini2GqtHIFbN2AOdBcgvbMfrCiMSZTN1qhJkltDF8fyoiLRz-QXSJdTM1VCeAL1V0Aev5pAaggV6MFUJC6MkNdoCmTltg9cAi_wrI8HE0rVlL1dEB8eV7ih4zC7rPNX5yxYEkjW-lno5p62KkMuoccmdDB0el3QR1YyDgg9xJhSCFcumSqYymmRpYTsxqHoribOuJHL7anZHXDdD0LA50nYK21LIvyLuONM-lYxEPGm21g',
    },
    {
      name: 'Sophie L.',
      role: 'Clinical Assistant',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrroYqXx6WlopdI62WOOprgJdcH7E7q6hWcYwUn_hDcTEQyqTTvqMo8wZrdRSS30PryBE0L2STXuX_7LoagTFIAWcY7XVs3XQCyJo2gOEsGyujx_fkCI_p-yZiNpsuLmM6bqnUEYVgluo3qarPNUzlkVi7VFTmwsTIouDvBtrwCF_tnu0CKkN1J1O8_tpEuKxAwjAm03ozAGHyz4aNctWBGUhGrn1_UfDGus5GtUWAuuF08-y0L4t3qzw65_jLWM0KRWEQyIALnys',
    },
    {
      name: 'Clarissa K.',
      role: 'Patient Coordinator',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD69A6w8SCXqdZx4R7iVWt6iwkEKWenKvoN8bzTzBRokWvMunWNT47y19uZnZMwAhxcmSHTW4DAntmc_brCuhlP-0_blvPpO0xfIwp1BJ93X9SJN2Mqyy3b4P70YgugOv00SdDPZaHf4PO8vNXZvRevdjRJkiYL_rGljjX0349TVp2Y5NYjBpf0YO0wP5i5wTT4dFqwdAD12ubnRjIPkeoeIlHxa5vUatVGWDwUaFeT2wzIFC4EvkKX5oUk3-_tVYA0LUsyFqatSbc',
    },
  ]

  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold mb-4">The Hearts Behind the Care</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            From the moment you walk in to the final polish, our dedicated staff ensures your journey is seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="md:col-span-1 bg-surface-container-lowest p-6 rounded-xl hover:bg-primary-fixed transition-colors duration-300"
            >
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover"
                  src={member.image}
                />
              </div>
              <h4 className="font-headline font-bold text-lg">{member.name}</h4>
              <p className="text-sm text-on-surface-variant font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <span className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-bold">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              groups
            </span>
            A unified team of 12 clinical professionals
          </span>
        </div>
      </div>
    </section>
  )
}
