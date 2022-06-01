import sanityClient from '@sanity/client'

export default sanityClient({
    "projectId": "j1j4el8m",
    "dataset": "production",
    apiVersion: '2021-03-25',
    dataset: 'production',
    token: 'sky72ZO12EhzHbSGfidI6FMpwy1fYJAyEJaHv8sDcwf6olsgnQyVwCW4bFfDxjcDJPhpgkVHNM8Cg9M7mOsoi5vBRfBoAX7zs0y3KSPBkCt84o8uPuM1XefyTAAKDeXkfeKo5uawxTsfaEQA8GK479rXhDVkaLh4OSzb4s2Yt0laI8g89pdL', // or leave blank for unauthenticated usage
    useCdn: true,
    ignoreBrowserTokenWarning: true,
})