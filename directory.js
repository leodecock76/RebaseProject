// Sample housing data (in a real app, this would come from an API)
const housingData = [
    {
        id: 1,
        name: "Services for the Underserved, Inc.",
        type: "transitional",
        borough: "manhattan",
        location: "Midtown South, Manhattan",
        description: "Operates a continuum of care including permanent supportive, transitional, and NY/NY III family/single adult programs",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(212) 633-6900",
            email: "services@sus.org"
        },
        website: "https://sus.org/"
    },
    {
        id: 2,
        name: "NYCHA Albany Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Crown Heights, Brooklyn",
        description: "Albany Houses offers public housing with youth services and community support through CAMBA.",
        services: [],
        contact: {
            phone: "(718) 774-8100",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 3,
        name: "NYCHA Bay View Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Canarsie, Brooklyn",
        description: "Bay View is a NYCHA development being renovated under PACT with new resident services.",
        services: [],
        contact: {
            phone: "(718) 251-5662",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 4,
        name: "NYCHA Borinquen Plaza",
        type: "permanent",
        borough: "brooklyn",
        location: "Williamsburg, Brooklyn",
        description: "Offers affordable NYCHA housing with access to basic resident services.",
        services: [],
        contact: {
            phone: "(718) 782-7803",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 5,
        name: "NYCHA Boulevard Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "East New York, Brooklyn",
        description: "Provides public housing with standard NYCHA resident services.",
        services: [],
        contact: {
            phone: "(718) 649-6789",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 6,
        name: "NYCHA Breukelen Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Canarsie, Brooklyn",
        description: "Offers public housing alongside general NYCHA assistance.",
        services: [],
        contact: {
            phone: "(718) 649-7630",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 7,
        name: "NYCHA Brownsville",
        type: "permanent",
        borough: "brooklyn",
        location: "Brownsville, Brooklyn",
        description: "Provides NYCHA public housing with essential resident services.",
        services: [],
        contact: {
            phone: "(718) 498-1030",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 8,
        name: "NYCHA Cypress Hills Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "East New York, Brooklyn",
        description: "Offers public housing and access to NYCHA resident programs.",
        services: [],
        contact: {
            phone: "(718) 647-1820",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 9,
        name: "NYCHA Farragut Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Downtown Brooklyn, Brooklyn",
        description: "Provides affordable public housing with general NYCHA support.",
        services: [],
        contact: {
            phone: "(718) 625-7044",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 10,
        name: "NYCHA Glenwood Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Flatlands, Brooklyn",
        description: "Offers NYCHA housing with access to standard resident services.",
        services: [],
        contact: {
            phone: "(718) 251-5583",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 11,
        name: "NYCHA Ingersoll Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Bedford-Stuyvesant, Brooklyn",
        description: "Public housing complex with foundational NYCHA services.",
        services: [],
        contact: {
            phone: "(718) 624-7316",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 12,
        name: "NYCHA Linden Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "East New York, Brooklyn",
        description: "Provides NYCHA housing and access to general resident support.",
        services: [],
        contact: {
            phone: "(718) 649-3774",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 13,
        name: "NYCHA Marcy Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Bedford-Stuyvesant, Brooklyn",
        description: "One of NYCHA's largest developments with public housing and support services.",
        services: [],
        contact: {
            phone: "(718) 875-7705",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 14,
        name: "NYCHA Marlboro Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Gravesend, Brooklyn",
        description: "Public housing complex offering NYCHA resident resources.",
        services: [],
        contact: {
            phone: "(718) 373-9513",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 15,
        name: "NYCHA Red Hook East Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Red Hook, Brooklyn",
        description: "Offers affordable NYCHA housing with essential resident support.",
        services: [],
        contact: {
            phone: "(718) 852-6771",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 16,
        name: "NYCHA Van Dyke Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Brownsville, Brooklyn",
        description: "Public housing with NYCHA-led resident assistance.",
        services: [],
        contact: {
            phone: "(718) 495-4000",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 17,
        name: "NYCHA Walt Whitman Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Fort Greene, Brooklyn",
        description: "Provides public housing units and access to NYCHA services.",
        services: [],
        contact: {
            phone: "(718) 875-6690",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 18,
        name: "NYCHA Williamsburg Houses",
        type: "permanent",
        borough: "brooklyn",
        location: "Williamsburg, Brooklyn",
        description: "Offers NYCHA housing in the heart of Williamsburg with resident supports.",
        services: [],
        contact: {
            phone: "(718) 387-0908",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/brooklyn.page"
    },
    {
        id: 19,
        name: "Thrive for Life - Abraham House",
        type: "transitional",
        borough: "bronx",
        location: "Mott Haven, Bronx",
        description: "A scholarship-based residential college program for formerly incarcerated scholars, offering holistic support and career services.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(212) 337-7544",
            email: "info@thriveforlife.org"
        },
        website: "https://thriveforlife.org/abraham"
    },
    {
        id: 20,
        name: "Beacon of Hope Clubhouse",
        type: "supportive",
        borough: "bronx",
        location: "Bronx, Bronx",
        description: "A Catholic Charities program providing supervised group living for individuals with serious mental illness alongside rehab and wellness services.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(888) 744-7900",
            email: "Website Form"
        },
        website: "https://cccsny.org/beacon-hope"
    },
    {
        id: 21,
        name: "Bronx Independent Living Services",
        type: "supportive",
        borough: "bronx",
        location: "Belmont, Bronx",
        description: "An independent organization offering supportive housing and peer-based independent living assistance for disabled Bronx residents.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(718) 515-2800",
            email: "Website Form"
        },
        website: "https://www.acces.nysed.gov/independent-living-center-ilc/bronx-independent-living-services-inc-bils"
    },
    {
        id: 22,
        name: "Bronx Shepherds Restoration Corporation",
        type: "transitional",
        borough: "bronx",
        location: "Tremont, Bronx",
        description: "A Bronx nonprofit providing housing referrals and restoration-based support for justice-involved individuals.",
        services: ["case-management", "mental-health", "employment"],
        contact: {
            phone: "(718) 299-0500",
            email: "info@bronxshepherds.org"
        },
        website: "https://www.bronxshepherds.org/"
    },
    {
        id: 23,
        name: "BronxWorks",
        type: "supportive",
        borough: "bronx",
        location: "Grand Concourse, Bronx",
        description: "A settlement house with a full spectrum of housing services—from homeless outreach to supportive and permanent housing—plus workforce, legal, and senior care.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(646) 393-4000",
            email: "Website Form"
        },
        website: "https://bronxworks.org/"
    },
    {
        id: 24,
        name: "Susan's Place (Care for the Homeless)",
        type: "transitional",
        borough: "bronx",
        location: "University Heights, Bronx",
        description: "A 200‑bed CFH-run shelter for medically frail and mentally ill women offering onsite healthcare and housing services.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 943-1341",
            email: "Website Form"
        },
        website: "https://careforthehomeless.org/"
    },
    {
        id: 25,
        name: "Nelson Avenue Family Residence (Care for the Homeless)",
        type: "emergency",
        borough: "bronx",
        location: "Morris Heights, Bronx",
        description: "A family shelter that provides case management, housing support, and referrals for mental health and employment.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 943-1341",
            email: "Website Form"
        },
        website: "https://careforthehomeless.org/"
    },
    {
        id: 26,
        name: "Jackson Avenue Family Residence (Care for the Homeless)",
        type: "emergency",
        borough: "bronx",
        location: "Mott Haven, Bronx",
        description: "BronxWorks-operated family shelter offering comprehensive familial support services.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 943-1341",
            email: "Website Form"
        },
        website: "https://careforthehomeless.org/"
    },
    {
        id: 27,
        name: "Franklin Women's Triage and Referral Shelter (Care for the Homeless)",
        type: "emergency",
        borough: "bronx",
        location: "Claremont Village, Bronx",
        description: "A triage shelter for women providing immediate intake, healthcare screening, casework, and rehousing assistance.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 943-1341",
            email: "Website Form"
        },
        website: "https://careforthehomeless.org/"
    },
    {
        id: 28,
        name: "Crotona Park Transitional Housing (Care for the Homeless)",
        type: "transitional",
        borough: "bronx",
        location: "Crotona Park, Bronx",
        description: "CFH-managed transitional housing in the Crotona Park area combining shelter with case management and behavioral support.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 943-1341",
            email: "Website Form"
        },
        website: "https://careforthehomeless.org/"
    },
    {
        id: 29,
        name: "Community Resource Center for the Developmentally Disabled, Inc.",
        type: "supportive",
        borough: "bronx",
        location: "Van Nest, Bronx",
        description: "Provides residential and day habilitation services for adults with developmental disabilities in Bronx group homes.",
        services: ["case-management", "mental-health"],
        contact: {
            phone: "(718) 292-1705",
            email: "Website Form"
        },
        website: "https://www.crcdd.org/"
    },
    {
        id: 30,
        name: "East Side House Settlement",
        type: "supportive",
        borough: "bronx",
        location: "Mott Haven, Bronx",
        description: "A settlement house offering education, workforce development, social services, and supportive housing referrals citywide.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(718) 665-5250",
            email: "info@eastsidehouse.org"
        },
        website: "https://www.eastsidehouse.org/"
    },
    {
        id: 31,
        name: "East Tremont Transitional Housing Program",
        type: "transitional",
        borough: "bronx",
        location: "East Tremont, Bronx",
        description: "Operated by NAICA since February 2016, this 154-bed program supports homeless single adults—primarily men with mental health needs—with intensive case management, psychiatric and medical care, and employment placement services.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(347) 226-4169",
            email: "info@naicany.org"
        },
        website: "https://www.naicany.org/transitional-housing/"
    },
    {
        id: 32,
        name: "Paul's House (Episcopal Social Services)",
        type: "transitional",
        borough: "bronx",
        location: "Bronx, Bronx",
        description: "Episcopal Social Services operates Paul's House Annex, a group home caring for foster teens with 24-hour staffing, surrogate parenting, and comprehensive residential support services.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(212) 265-5433",
            email: "Website Form"
        },
        website: "https://sphnyc.org/"
    },
    {
        id: 33,
        name: "Family Justice Center",
        type: "emergency",
        borough: "city-wide",
        location: "City-Wide",
        description: "A City-run center offering free, confidential help—including safe space, mental health and legal support, job readiness, and referrals to housing—designed for survivors of domestic and gender-based violence.",
        services: ["case-management", "mental-health", "employment"],
        contact: {
            phone: "311",
            email: "outreach@endgbv.nyc.gov"
        },
        website: "https://www.nyc.gov/site/ocdv/programs/family-justice-centers.page"
    },
    {
        id: 34,
        name: "Fulton Community Reentry Center",
        type: "transitional",
        borough: "bronx",
        location: "Claremont, Bronx",
        description: "140-bed center providing older (50+) formerly incarcerated men with supportive transitional housing, comprehensive reentry planning, job training, healthcare, and mental health services.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(917) 451-4152",
            email: "fulton@osborneny.org"
        },
        website: "https://www.osborneny.org/our-services/fulton-community-reentry-center"
    },
    {
        id: 35,
        name: "Bronx Community Reentry Center",
        type: "transitional",
        borough: "bronx",
        location: "Kingsbridge Heights, Bronx",
        description: "A 196-bed reentry facility supporting justice-involved individuals with job readiness programs, substance use classes, medical support, and intensive case management.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 561-4155",
            email: "Website Form"
        },
        website: "https://www.reentryprograms.com/go/bronx-community-reentry-center"
    },
    {
        id: 36,
        name: "Trinity - Rev. William James Senior Apartments",
        type: "supportive",
        borough: "bronx",
        location: "Morrisania, Bronx",
        description: "Offers affordable senior apartments with light supportive services for older residents in a dignified community setting.",
        services: ["case-management", "mental-health", "employment"],
        contact: {
            phone: "(718) 587-0866",
            email: "Website Form"
        },
        website: "https://thenyhc.org/projects/the-trinity-rev-william-m-james-senior-apartments/"
    },
    {
        id: 37,
        name: "The Fortune Society",
        type: "transitional",
        borough: "city-wide",
        location: "City-Wide",
        description: "Offers a full continuum of reentry housing—from emergency shelters to permanent supportive residences—along with comprehensive services including job training, counseling, and mental health care.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(212) 691-7554",
            email: "info@fortunesociety.org"
        },
        website: "https://fortunesociety.org/"
    },
    {
        id: 38,
        name: "The Living Room - Safe Haven Bronx Works",
        type: "emergency",
        borough: "bronx",
        location: "Hunts Point, Bronx",
        description: "A 24-hour drop-in center offering safe space, medical care, and housing support for homeless adults, with temporary shelters and substance use counseling.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(646) 393-4000",
            email: "Website Form"
        },
        website: "https://bronxworks.org/our-services/adult-and-family-homeless-services/adult-shelter-services/"
    },
    {
        id: 39,
        name: "Neighborhood Coalition for Shelter - Louis Nine House",
        type: "supportive",
        borough: "bronx",
        location: "Charlotte Gardens, Bronx",
        description: "Provides supportive housing for young adults aging out of foster care or experiencing homelessness, with on-site case management and services.",
        services: ["case-management", "mental-health", "employment"],
        contact: {
            phone: "(917) 477-2477",
            email: "loutlaw@ncsinc.org"
        },
        website: "https://www.ncsinc.org/lnh"
    },
    {
        id: 40,
        name: "NYCHA Patterson Houses",
        type: "permanent",
        borough: "bronx",
        location: "Mott Haven, Bronx",
        description: "Offers affordable NYCHA housing with essential resident support.",
        services: [],
        contact: {
            phone: "(718) 292-5800",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/bronx.page"
    },
    {
        id: 41,
        name: "NYCHA Betances House",
        type: "permanent",
        borough: "bronx",
        location: "Mott Haven, Bronx",
        description: "A permanent housing development with no additional services, part of NYCHA's Bronx network of public housing.",
        services: [],
        contact: {
            phone: "(718) 665-0731",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/bronx.page"
    },
    {
        id: 42,
        name: "NYCHA Morrisania Air Houses",
        type: "permanent",
        borough: "bronx",
        location: "Melrose, Bronx",
        description: "Offers affordable NYCHA housing with essential resident support.",
        services: [],
        contact: {
            phone: "(718) 588-6009",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/bronx.page"
    },
    {
        id: 43,
        name: "NYCHA Bronx River Houses",
        type: "permanent",
        borough: "bronx",
        location: "Soundview, Bronx",
        description: "Offers affordable NYCHA housing with essential resident support.",
        services: [],
        contact: {
            phone: "(718) 842-9250",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/bronx.page"
    },
    {
        id: 44,
        name: "NYCHA Sotomayor Houses",
        type: "permanent",
        borough: "bronx",
        location: "Soundview, Bronx",
        description: "One of NYCHA's largest developments with public housing and support services.",
        services: [],
        contact: {
            phone: "(718) 842-7164",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/bronx.page"
    },
    {
        id: 45,
        name: "NYCHA James Monroe Houses",
        type: "permanent",
        borough: "bronx",
        location: "Soundview, Bronx",
        description: "Offers NYCHA housing with access to standard resident services.",
        services: [],
        contact: {
            phone: "(718) 542-1900",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/bronx.page"
    },
    {
        id: 46,
        name: "NYCHA Eastchester Gardens",
        type: "permanent",
        borough: "bronx",
        location: "East Bronx, Bronx",
        description: "Offers NYCHA housing with access to standard resident services.",
        services: [],
        contact: {
            phone: "(718) 547-7033",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/bronx.page"
    },
    {
        id: 47,
        name: "NYCHA Adams Houses",
        type: "permanent",
        borough: "bronx",
        location: "Melrose, Bronx",
        description: "Offers NYCHA housing with access to standard resident services.",
        services: [],
        contact: {
            phone: "(718) 993-1585",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/bronx.page"
    },
    {
        id: 19,
        name: "Brooklyn House Residential Reentry Center",
        type: "transitional",
        borough: "brooklyn",
        location: "Downtown Brooklyn, Brooklyn",
        description: "A federal reentry facility offering structured support and job readiness for returning citizens.",
        services: ["case-management", "employment"],
        contact: {
            phone: "(718) 801-8050",
            email: "Website Form"
        },
        website: "https://www.reentryprograms.com/go/brooklyn-house-residential-reentry-center"
    },
    {
        id: 20,
        name: "The Rise",
        type: "supportive",
        borough: "brooklyn",
        location: "Brownsville, Brooklyn",
        description: "A mixed-use, Passive House Certified development that will offer 72 units of supportive and affordable housing for justice-involved families.",
        services: ["case-management", "mental-health"],
        contact: {
            phone: "311",
            email: "Website Form"
        },
        website: "https://thenyhc.org/projects/the-rise/"
    },
    {
        id: 21,
        name: "Marcus Garvey Supportive Housing (Osborne)",
        type: "supportive",
        borough: "brooklyn",
        location: "Bedford-Stuyvesant, Brooklyn",
        description: "Offers long-term housing and comprehensive support for formerly homeless individuals.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(718) 707-2600",
            email: "info@osborneny.org"
        },
        website: "https://www.osborneny.org"
    },
    {
        id: 22,
        name: "Freedom House (Fortune Society)",
        type: "transitional",
        borough: "city-wide",
        location: "City-Wide",
        description: "A reentry-focused transitional program offering housing and comprehensive recovery and job services.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(212) 691-7554",
            email: "info@fortunesociety.org"
        },
        website: "https://fortunesociety.org/programs/freedom-house/"
    },
    {
        id: 23,
        name: "Prospect Place (Center for Urban Community Services)",
        type: "transitional",
        borough: "brooklyn",
        location: "Prospect Heights, Brooklyn",
        description: "A CUCS-run program providing short-term supportive housing and reentry services.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(212) 801-3300",
            email: "Website Form"
        },
        website: "https://www.cucs.org/programs/housing/prospect-place/"
    },
    {
        id: 24,
        name: "Atlantic House Men's Shelter (CAMBA)",
        type: "emergency",
        borough: "brooklyn",
        location: "Broadway Junction, Brooklyn",
        description: "A CAMBA-operated men's shelter offering immediate housing and wraparound support.",
        services: ["case-management", "employment"],
        contact: {
            phone: "(718) 287-2600",
            email: "info@camba.org"
        },
        website: "https://www.camba.org/"
    },
    {
        id: 25,
        name: "Brooklyn Community Housing and Services",
        type: "supportive",
        borough: "brooklyn",
        location: "Brooklyn, Brooklyn",
        description: "Offers a continuum of housing solutions with supportive services for vulnerable residents.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(718) 625-0635",
            email: "info@bchands.org"
        },
        website: "https://bchands.org"
    },
    {
        id: 26,
        name: "The Artel Transitional Housing Program",
        type: "transitional",
        borough: "city-wide",
        location: "City-Wide",
        description: "Provides transitional housing with art-based case management and mental health support.",
        services: ["case-management", "mental-health"],
        contact: {
            phone: "(347) 226-4169",
            email: "info@naicany.org"
        },
        website: "https://www.naicany.org/transitional-housing/"
    },
    {
        id: 27,
        name: "Breaking Ground",
        type: "permanent",
        borough: "city-wide",
        location: "City-Wide",
        description: "One of NYC's largest providers of supportive and permanent housing with an array of services.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(800) 324-7055",
            email: "intake@breakingground.org"
        },
        website: "https://breakingground.org/"
    },
    {
        id: 28,
        name: "Win NYC",
        type: "emergency",
        borough: "city-wide",
        location: "City-Wide",
        description: "WIN NYC runs crisis housing for families and individuals with comprehensive wraparound services.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(212) 695-4758",
            email: "info@winnyc.org"
        },
        website: "https://winnyc.org/wins-shelters/"
    },
    {
        id: 29,
        name: "Mary Brooks Transitional Living Residence",
        type: "transitional",
        borough: "city-wide",
        location: "City-Wide",
        description: "A transitional care residence offering mental health and substance-use treatment services.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(800) 342-9871",
            email: "Website Form"
        },
        website: "https://www.nyconnects.ny.gov/services/the-mary-brooks-transitional-living-residence-omh-pr-900200002432"
    },
    {
        id: 30,
        name: "HousingWorks - Emergency and Transitional Housing",
        type: "transitional",
        borough: "queens",
        location: "Long Island City, Queens",
        description: "HousingWorks offers up to a year of transitional shelter and healthcare-focused wraparound services for people exiting homelessness or incarceration.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(347) 473-7400",
            email: "info@housingworks.org"
        },
        website: "https://www.housingworks.org/services"
    },
    {
        id: 31,
        name: "Hour Children - Communal Residences",
        type: "supportive",
        borough: "queens",
        location: "Queens-Wide",
        description: "Operates six supportive communal residences for women and children reentering community post-incarceration.",
        services: ["case-management", "mental-health"],
        contact: {
            phone: "(718) 433-4724",
            email: "inquiries@hourchildren.org"
        },
        website: "https://hourchildren.org/how-we-help/supportive-housing"
    },
    {
        id: 32,
        name: "Ready Willing and Able",
        type: "transitional",
        borough: "city-wide",
        location: "City-Wide",
        description: "Provides job-training, transitional residential services, and intensive support to formerly incarcerated men citywide.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(212) 628-5207",
            email: "info@doe.org"
        },
        website: "https://www.doe.org/programs/ready-willing-able/"
    },
    {
        id: 33,
        name: "Phoenix House",
        type: "transitional",
        borough: "queens",
        location: "Springfield Gardens, Queens",
        description: "Serves individuals struggling with co-occurring substance abuse and mental health issues.",
        services: ["substance-abuse", "mental-health"],
        contact: {
            phone: "(844) 815-1508",
            email: "Website Form"
        },
        website: "https://phoenixhouseny.org/our-programs/springfield-gardens-community-residence/"
    },
    {
        id: 34,
        name: "TSI NY",
        type: "transitional",
        borough: "queens",
        location: "Whitestone, Queens",
        description: "Provides community based services to individuals recovering from mental illness.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 746-6647",
            email: "Website Form"
        },
        website: "https://www.tsiny.org/"
    },
    {
        id: 35,
        name: "NYCHA Astoria Houses",
        type: "permanent",
        borough: "queens",
        location: "Astoria, Queens",
        description: "Offers public housing and access to NYCHA resident programs.",
        services: [],
        contact: {
            phone: "(718) 932-0013",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/queens.page"
    },
    {
        id: 36,
        name: "NYCHA Hammel Houses",
        type: "permanent",
        borough: "queens",
        location: "Rockaway Beach, Queens",
        description: "Offers affordable NYCHA housing with access to basic resident services.",
        services: [],
        contact: {
            phone: "(718) 474-4000",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/queens.page"
    },
    {
        id: 37,
        name: "NYCHA Ocean Bay Apartments",
        type: "permanent",
        borough: "queens",
        location: "Bayside, Queens",
        description: "Provides NYCHA public housing with essential resident services.",
        services: [],
        contact: {
            phone: "(718) 471-5420",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/queens.page"
    },
    {
        id: 38,
        name: "NYCHA Pomonok Houses",
        type: "permanent",
        borough: "queens",
        location: "Flushing, Queens",
        description: "Offers affordable NYCHA housing with access to basic resident services.",
        services: [],
        contact: {
            phone: "(718) 591-4800",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/queens.page"
    },
    {
        id: 39,
        name: "NYCHA Queensbridge Houses",
        type: "permanent",
        borough: "queens",
        location: "Long Island City, Queens",
        description: "Public housing complex with foundational NYCHA services.",
        services: [],
        contact: {
            phone: "(718) 784-7669",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/queens.page"
    },
    {
        id: 40,
        name: "NYCHA Ravenswood Houses",
        type: "permanent",
        borough: "queens",
        location: "Long Island City, Queens",
        description: "Offers affordable NYCHA housing with essential resident support.",
        services: [],
        contact: {
            phone: "(718) 729-5621",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/queens.page"
    },
    {
        id: 41,
        name: "NYCHA South Jamaica Houses",
        type: "permanent",
        borough: "queens",
        location: "South Jamaica, Queens",
        description: "Provides public housing with standard NYCHA resident services.",
        services: [],
        contact: {
            phone: "(718) 657-3100",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/queens.page"
    },
    {
        id: 42,
        name: "NYCHA Woodside Houses",
        type: "permanent",
        borough: "queens",
        location: "Woodside, Queens",
        description: "Offers public housing alongside general NYCHA assistance.",
        services: [],
        contact: {
            phone: "(718) 278-5510",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/queens.page"
    },
    {
        id: 43,
        name: "NYCHA Berry Houses",
        type: "permanent",
        borough: "staten-island",
        location: "Dongan Hills, Staten Island",
        description: "Offers affordable NYCHA housing with access to basic resident services.",
        services: [],
        contact: {
            phone: "(718) 351-3466",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/staten-island.page"
    },
    {
        id: 44,
        name: "NYCHA Mariners Harbor Houses",
        type: "permanent",
        borough: "staten-island",
        location: "Mariners Harbor, Staten Island",
        description: "Offers affordable NYCHA housing with essential resident support.",
        services: [],
        contact: {
            phone: "(718) 494-1800",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/staten-island.page"
    },
    {
        id: 45,
        name: "NYCHA Stapleton Houses",
        type: "permanent",
        borough: "staten-island",
        location: "Stapleton, Staten Island",
        description: "Offers affordable NYCHA housing with essential resident support.",
        services: [],
        contact: {
            phone: "(718) 448-5000",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/staten-island.page"
    },
    {
        id: 46,
        name: "NYCHA Todt Hill Houses",
        type: "permanent",
        borough: "staten-island",
        location: "Manor Heights, Staten Island",
        description: "Offers public housing alongside general NYCHA assistance.",
        services: [],
        contact: {
            phone: "(718) 698-4900",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/staten-island.page"
    },
    {
        id: 47,
        name: "NYCHA Richmond Terrace Houses",
        type: "permanent",
        borough: "staten-island",
        location: "New Brighton, Staten Island",
        description: "Offers affordable NYCHA housing with essential resident support.",
        services: [],
        contact: {
            phone: "(718) 442-5400",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/staten-island.page"
    },
    {
        id: 48,
        name: "NYCHA West Brighton Houses",
        type: "permanent",
        borough: "staten-island",
        location: "West New Brighton, Staten Island",
        description: "Offers public housing and access to NYCHA resident programs.",
        services: [],
        contact: {
            phone: "(718) 442-4200",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/staten-island.page"
    },
    {
        id: 49,
        name: "Staten Island Community Re-entry Assistance Network",
        type: "transitional",
        borough: "staten-island",
        location: "Staten Island, Staten Island",
        description: "Offers transitional housing and reentry support services to formerly incarcerated Staten Islanders.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(516) 539-0150",
            email: "Website Form"
        },
        website: "https://eac-network.org/staten-island-cran/"
    },
    {
        id: 50,
        name: "DOCCS Re-entry Services",
        type: "transitional",
        borough: "city-wide",
        location: "City-Wide",
        description: "NY State Department of Corrections unit providing reentry referrals and transitional support through field offices and community partnerships.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "311",
            email: "Website Form"
        },
        website: "https://doccs.ny.gov/re-entry-services"
    },
    {
        id: 51,
        name: "Project Hospitality",
        type: "supportive",
        borough: "city-wide",
        location: "City-Wide",
        description: "Nonprofit operating emergency, transitional, and supportive housing with comprehensive social services.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 448-1544",
            email: "Website Form"
        },
        website: "https://projecthospitality.org"
    },
    {
        id: 52,
        name: "Staten Island Justice Center",
        type: "emergency",
        borough: "staten-island",
        location: "Brighton Heights, Staten Island",
        description: "Convenes court-connected services offering emergency shelter and transitional support to justice-involved individuals.",
        services: ["case-management", "substance-abuse", "mental-health"],
        contact: {
            phone: "(212) 256-7913",
            email: "Website Form"
        },
        website: "https://www.innovatingjustice.org/program/staten-island-justice-center/"
    },
    {
        id: 53,
        name: "Project Renewal's Clinton Residence",
        type: "transitional",
        borough: "manhattan",
        location: "Midtown, Manhattan",
        description: "A 57-bed transitional program by Project Renewal for adults with mental illness, offering medication management and life-skill development.",
        services: ["case-management", "mental-health"],
        contact: {
            phone: "(212) 620-0340",
            email: "None"
        },
        website: "https://www.projectrenewal.org/our-work/homes/clinton-residence/"
    },
    {
        id: 54,
        name: "Exodus Transitional Community, Inc.",
        type: "transitional",
        borough: "manhattan",
        location: "East Harlem, Manhattan",
        description: "Provides holistic reentry services including job training, counseling, and court advocacy for justice-involved individuals.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(917) 492-0990",
            email: "info@etcny.org"
        },
        website: "https://www.etcny.org/"
    },
    {
        id: 55,
        name: "Veritas Community House",
        type: "transitional",
        borough: "manhattan",
        location: "Upper Manhattan, Manhattan",
        description: "A 36-bed drug-free transitional residence for clients in outpatient substance use treatment, offering life-skills and vocational support.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 657-6195",
            email: "Website Form"
        },
        website: "https://samadfs.samaritanvillage.org/people-we-serve/people-with-addictions/community-residences"
    },
    {
        id: 56,
        name: "Thrive for Life - Ignacio House",
        type: "transitional",
        borough: "manhattan",
        location: "Harlem, Manhattan",
        description: "A scholarship-based residential college program for formerly incarcerated scholars, offering holistic support and career services.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(212) 337-7544",
            email: "info@thriveforlife.org"
        },
        website: "https://thriveforlife.org/ignacio"
    },
    {
        id: 57,
        name: "St. Luke's (Fortune Society)",
        type: "transitional",
        borough: "manhattan",
        location: "Manhattan, Manhattan",
        description: "The Fortune Society operates 'the Castle,' a residence offering structured group counseling and life coaching to support reentry from incarceration.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(212) 691-7554",
            email: "info@fortunesociety.org"
        },
        website: "https://www.fortunesociety.org/"
    },
    {
        id: 58,
        name: "Getting Out and Staying Out",
        type: "transitional",
        borough: "manhattan",
        location: "East Harlem, Manhattan",
        description: "GOSO offers mentoring, educational support, and employment readiness to young justice-involved men as part of a broader reentry network.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(212) 831-5020",
            email: "Info@gosonyc.org"
        },
        website: "https://www.gosonyc.org/"
    },
    {
        id: 59,
        name: "Service for the Underserved",
        type: "transitional",
        borough: "city-wide",
        location: "City-Wide",
        description: "Provides comprehensive housing and behavioral health services across NYC, including permanent, transitional, and supportive options.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(917) 492-1019",
            email: "None"
        },
        website: "https://www.nyc.gov/assets/nycha/downloads/pdf/re-entry-brochure-20151109-en.pdf"
    },
    {
        id: 60,
        name: "Bowery Residents' Committee",
        type: "emergency",
        borough: "manhattan",
        location: "Lower East Side, Manhattan",
        description: "BRC runs 8 transitional shelters and community residences in Manhattan, integrating mental health, addiction, and employment supports.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(212) 803-5700",
            email: "info@brc.org"
        },
        website: "https://www.brc.org/shelter"
    },
    {
        id: 61,
        name: "Nazareth Housing",
        type: "supportive",
        borough: "manhattan",
        location: "Lower East Side, Manhattan",
        description: "Provides long-term housing stability through case management and supports to prevent eviction and maintain permanent housing.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(212) 777-1010",
            email: "Website Form"
        },
        website: "https://nazarethhousingnyc.org/"
    },
    {
        id: 62,
        name: "NYCHA Baruch Houses",
        type: "permanent",
        borough: "manhattan",
        location: "Lower East Side, Manhattan",
        description: "Provides public housing units and access to NYCHA services.",
        services: [],
        contact: {
            phone: "(212) 677-9400",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/manhattan.page"
    },
    {
        id: 63,
        name: "NYCHA Grant Houses",
        type: "permanent",
        borough: "manhattan",
        location: "Morningside Heights, Manhattan",
        description: "Provides NYCHA housing and access to general resident support.",
        services: [],
        contact: {
            phone: "(212) 666-4301",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/manhattan.page"
    },
    {
        id: 64,
        name: "NYCHA Elliott-Chelsea Houses",
        type: "permanent",
        borough: "manhattan",
        location: "Chelsea, Manhattan",
        description: "Public housing with NYCHA-led resident assistance.",
        services: [],
        contact: {
            phone: "(212) 924-2626",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/manhattan.page"
    },
    {
        id: 65,
        name: "NYCHA Carver Houses East",
        type: "permanent",
        borough: "manhattan",
        location: "East Harlem, Manhattan",
        description: "Offers affordable NYCHA housing with essential resident support.",
        services: [],
        contact: {
            phone: "(212) 534-1205",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/manhattan.page"
    },
    {
        id: 66,
        name: "NYCHA Amsterdam Houses",
        type: "permanent",
        borough: "manhattan",
        location: "Upper West Side, Manhattan",
        description: "Offers NYCHA housing in the heart of the UWS with resident supports.",
        services: [],
        contact: {
            phone: "(212) 265-1803",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/manhattan.page"
    },
    {
        id: 67,
        name: "NYCHA Alfred E. Smith Houses",
        type: "permanent",
        borough: "manhattan",
        location: "Lower East Side, Manhattan",
        description: "One of NYCHA's largest developments with public housing and support services.",
        services: [],
        contact: {
            phone: "(917) 965-1809",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/manhattan.page"
    },
    {
        id: 68,
        name: "NYCHA Frederick Douglass Houses",
        type: "permanent",
        borough: "manhattan",
        location: "Upper West Side, Manhattan",
        description: "Offers NYCHA housing with access to standard resident services.",
        services: [],
        contact: {
            phone: "(212) 865-7200",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/manhattan.page"
    },
    {
        id: 69,
        name: "NYCHA King Towers",
        type: "permanent",
        borough: "manhattan",
        location: "Harlem, Manhattan",
        description: "Offers affordable NYCHA housing with essential resident support.",
        services: [],
        contact: {
            phone: "(212) 222-5205",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/manhattan.page"
    },
    {
        id: 70,
        name: "NYCHA Polo Grounds Towers",
        type: "permanent",
        borough: "manhattan",
        location: "West Harlem, Manhattan",
        description: "One of NYCHA's largest developments with public housing and support services.",
        services: [],
        contact: {
            phone: "(212) 283-1390",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/manhattan.page"
    },
    {
        id: 71,
        name: "NYCHA Lillian Wald Houses",
        type: "permanent",
        borough: "manhattan",
        location: "Lower East Side, Manhattan",
        description: "One of NYCHA's largest developments with public housing and support services.",
        services: [],
        contact: {
            phone: "(212) 673-9306",
            email: "None"
        },
        website: "https://www.nyc.gov/site/nycha/about/developments/manhattan.page"
    },
    {
        id: 72,
        name: "New Hope Transitional Housing",
        type: "transitional",
        borough: "bronx",
        location: "South Bronx, Bronx",
        description: "Provides temporary housing and support services to help Bronx residents stabilize and transition to permanent housing.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(718) 328-5502",
            email: "None"
        },
        website: "https://www.guidestar.org/profile/27-1440474"
    },
    {
        id: 73,
        name: "The Osborne Association",
        type: "supportive",
        borough: "city-wide",
        location: "City-Wide",
        description: "Offers housing programs and comprehensive reentry services for justice-involved individuals across the Bronx and NYC.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 707-2600",
            email: "info@osborneny.org"
        },
        website: "https://www.osborneny.org/"
    },
    {
        id: 74,
        name: "Palladia",
        type: "transitional",
        borough: "bronx",
        location: "Morris Heights, Bronx",
        description: "Provides recovery-focused housing and intensive social services to individuals battling homelessness, addiction, and mental health challenges.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 299-3300",
            email: "Website Form"
        },
        website: "https://www.rehab.com/palladia-starhill-residential"
    },
    {
        id: 75,
        name: "Part of the Solution (POTS)",
        type: "transitional",
        borough: "bronx",
        location: "Mott Haven, Bronx",
        description: "Delivers a range of shelter, drop-in, and transitional services in the Bronx, connecting clients to essential supports and life skills.",
        services: ["case-management", "employment", "mental-health"],
        contact: {
            phone: "(718) 220-4892",
            email: "information@potsbronx.org"
        },
        website: "https://potsbronx.org/"
    },
    {
        id: 76,
        name: "Promesa Systems, Inc.",
        type: "transitional",
        borough: "bronx",
        location: "Morris Heights, Bronx",
        description: "Aims to support under-served incarcerated individuals in the Bronx through transitional housing and case management (more details needed).",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 741-1900",
            email: "Website Form"
        },
        website: "https://acacianetwork.org/promesayouth/"
    },
    {
        id: 77,
        name: "Samaritan Village, Inc. - Highbridge Residential Treatment Program",
        type: "supportive",
        borough: "bronx",
        location: "Highbridge, Bronx",
        description: "Part of a major mixed-use development providing transitional and supportive units plus wraparound recovery and vocational services.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 206-2000",
            email: "Website Form"
        },
        website: "https://samaritanvillage.org/where-good-lives/16-bronx/77-ronald-l-savarese-ph-d-10"
    },
    {
        id: 78,
        name: "SouthEast Bronx Neighborhood Center - SEBNC",
        type: "supportive",
        borough: "bronx",
        location: "Southeast Bronx, Bronx",
        description: "Offers a drop-in center, transitional housing referrals, and comprehensive support services for Bronx youth and families.",
        services: ["case-management", "mental-health", "employment"],
        contact: {
            phone: "(718) 542-2727",
            email: "info@sebnc.org"
        },
        website: "https://sebnc.org/"
    },
    {
        id: 79,
        name: "St. Anthony Shelter for Renewal",
        type: "emergency",
        borough: "bronx",
        location: "Morrisania, Bronx",
        description: "Provides shelter and transitional services for men, alongside case management and supportive referrals.",
        services: ["case-management", "mental-health", "employment"],
        contact: {
            phone: "(718) 993-5161",
            email: "None"
        },
        website: "https://stanthonyshelter.org/"
    },
    {
        id: 80,
        name: "The VIDA Guidance Center (Comunilife)",
        type: "transitional",
        borough: "bronx",
        location: "Melrose, Bronx",
        description: "A Comunilife-run program offering transitional apartments and clinical services to individuals in recovery.",
        services: ["case-management", "mental-health", "substance-abuse"],
        contact: {
            phone: "(718) 364-7700",
            email: "None"
        },
        website: "https://www.urbanhealthplan.org/locations/vida-guidance-center/"
    },
    {
        id: 81,
        name: "Volunteers of America - Lydia E. Hoffman Family Residence",
        type: "supportive",
        borough: "bronx",
        location: "Bronx, Bronx",
        description: "Provides long-term housing and wraparound services for families formerly experiencing homelessness and housing instability.",
        services: ["case-management", "employment", "substance-abuse", "mental-health"],
        contact: {
            phone: "(718) 893-0909",
            email: "None"
        },
        website: "https://www.voa-gny.org/"
    }
];

// DOM elements
const resultsGrid = document.getElementById('resultsGrid');
const resultCount = document.getElementById('resultCount');
const noResults = document.getElementById('noResults');

// Custom dropdown elements
const typeDropdownBtn = document.getElementById('typeDropdownBtn');
const typeDropdown = document.getElementById('typeDropdown');
const boroughDropdownBtn = document.getElementById('boroughDropdownBtn');
const boroughDropdown = document.getElementById('boroughDropdown');
const servicesDropdownBtn = document.getElementById('servicesDropdownBtn');
const servicesDropdown = document.getElementById('servicesDropdown');
const sortDropdownBtn = document.getElementById('sortDropdownBtn');
const sortDropdown = document.getElementById('sortDropdown');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayResults(housingData);
    
    // Set default sort option
    setSelectedSort('alphabetical');
    
    // Custom dropdown event listeners
    setupDropdown(typeDropdownBtn, typeDropdown);
    setupDropdown(boroughDropdownBtn, boroughDropdown);
    setupDropdown(servicesDropdownBtn, servicesDropdown);
    setupDropdown(sortDropdownBtn, sortDropdown);
    
    // Add checkbox change listeners
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', performFilter);
    });
    
    // Add sort option click listeners
    document.querySelectorAll('#sortDropdown .dropdown-option').forEach(option => {
        option.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            setSelectedSort(value);
            performFilter();
            closeAllDropdowns();
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-dropdown')) {
            closeAllDropdowns();
        }
    });
});

// Setup dropdown functionality
function setupDropdown(btn, content) {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const isActive = content.classList.contains('show');
        
        closeAllDropdowns();
        
        if (!isActive) {
            content.classList.add('show');
            btn.classList.add('active');
        }
    });
}

// Close all dropdowns
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-content').forEach(content => {
        content.classList.remove('show');
    });
    document.querySelectorAll('.dropdown-btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Get selected values from checkboxes
function getSelectedValues(containerId) {
    const container = document.getElementById(containerId);
    const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// Update dropdown button text
function updateDropdownText(btnId, containerId, defaultText) {
    const btn = document.getElementById(btnId);
    const textElement = btn.querySelector('.dropdown-text');
    const selectedValues = getSelectedValues(containerId);
    
    if (selectedValues.length === 0) {
        textElement.textContent = defaultText;
        textElement.classList.remove('has-selection');
    } else {
        let displayText;
        if (selectedValues.length === 1) {
            // For boroughs, display in uppercase
            if (containerId === 'boroughDropdown') {
                displayText = selectedValues[0].toUpperCase();
            } else {
                displayText = selectedValues[0];
            }
        } else {
            displayText = `${selectedValues.length} selected`;
        }
        textElement.textContent = displayText;
        textElement.classList.add('has-selection');
    }
}

// Set selected sort option
function setSelectedSort(value) {
    // Remove active class from all options
    document.querySelectorAll('#sortDropdown .dropdown-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to selected option
    const selectedOption = document.querySelector(`#sortDropdown .dropdown-option[data-value="${value}"]`);
    if (selectedOption) {
        selectedOption.classList.add('active');
    }
}

// Get selected sort option
function getSelectedSort() {
    const activeOption = document.querySelector('#sortDropdown .dropdown-option.active');
    return activeOption ? activeOption.getAttribute('data-value') : 'alphabetical';
}

// Update sort dropdown text
function updateSortDropdownText() {
    const sortBtn = document.getElementById('sortDropdownBtn');
    const textElement = sortBtn.querySelector('.dropdown-text');
    const selectedSort = getSelectedSort();
    
    const sortLabels = {
        'alphabetical': 'Alphabetical',
        'type': 'Housing Type'
    };
    
    textElement.textContent = sortLabels[selectedSort];
}

// Search and filter functionality
function performFilter() {
    const selectedTypes = getSelectedValues('typeDropdown');
    const selectedBoroughs = getSelectedValues('boroughDropdown');
    const selectedServices = getSelectedValues('servicesDropdown');
    
    // Update dropdown button texts
    updateDropdownText('typeDropdownBtn', 'typeDropdown', 'Select Type(s)');
    updateDropdownText('boroughDropdownBtn', 'boroughDropdown', 'Select Borough(s)');
    updateDropdownText('servicesDropdownBtn', 'servicesDropdown', 'Select Service(s)');
    updateSortDropdownText();

    let filteredResults = housingData.filter(item => {
        // Type filter (multi)
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(item.type);

        // Borough filter (multi, City-Wide locations appear in all boroughs)
        const matchesBorough = selectedBoroughs.length === 0 || 
            selectedBoroughs.includes(item.borough) || 
            item.borough === 'city-wide' && selectedBoroughs.length > 0;

        // Services filter (multi, must match at least one selected service)
        const matchesService = selectedServices.length === 0 || selectedServices.some(service => item.services.includes(service));

        return matchesType && matchesBorough && matchesService;
    });

    displayResults(filteredResults);
}

// Display results
function displayResults(results) {
    resultCount.textContent = results.length;
    
    if (results.length === 0) {
        resultsGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    // Sort results based on selected option
    const sortOption = getSelectedSort();
    let sortedResults;

    if (sortOption === 'alphabetical') {
        sortedResults = results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'type') {
        sortedResults = results.sort((a, b) => formatType(a.type).localeCompare(formatType(b.type)));
    }

    resultsGrid.innerHTML = sortedResults.map(item => `
        <div class="housing-card">
            <div class="card-header">
                <div>
                    <div class="card-title">${item.name}</div>
                    <div class="card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${item.location}
                    </div>
                </div>
                <div class="card-type">${formatType(item.type)}</div>
            </div>
            
            <div class="card-description">${item.description}</div>
            
            <div class="card-services">
                ${item.services.map(service => `
                    <span class="service-tag">${formatService(service)}</span>
                `).join('')}
            </div>
            
            <div class="card-contact">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <a href="tel:${item.contact.phone}">${item.contact.phone}</a>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        ${item.contact.email === "Website Form" || item.contact.email === "None" ? 
                            `<span style="pointer-events: none; cursor: default;">${item.contact.email}</span>` : 
                            `<a href="mailto:${item.contact.email}">${item.contact.email}</a>`
                        }
                    </div>
                </div>
                <a href="${item.website}" target="_blank" class="website-link">
                    <i class="fas fa-external-link-alt"></i>
                    Visit Website
                </a>
            </div>
        </div>
    `).join('');
}

// Format type for display
function formatType(type) {
    const typeMap = {
        'transitional': 'Transitional',
        'permanent': 'Permanent',
        'emergency': 'Emergency',
        'supportive': 'Supportive',
        'city-wide': 'City-Wide'
    };
    return typeMap[type] || type;
}

// Format service for display
function formatService(service) {
    const serviceMap = {
        'case-management': 'Case Management',
        'employment': 'Employment',
        'substance-abuse': 'Substance Abuse',
        'mental-health': 'Mental Health'
    };
    return serviceMap[service] || service;
}

// Show detailed view (placeholder for future modal/detail page)
function showDetails(id) {
    const item = housingData.find(h => h.id === id);
    if (item) {
        // In a real app, this would open a modal or navigate to a detail page
        alert(`Detailed information for ${item.name}\n\nThis would show more detailed information about the housing option, including application process, requirements, and additional services.`);
    }
}

// Add loading state (for future API integration)
function showLoading() {
    resultsGrid.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner"></i>
            <p>Loading housing options...</p>
        </div>
    `;
}

// Simulate API call with loading state
function loadHousingData() {
    showLoading();
    
    // Simulate API delay
    setTimeout(() => {
        displayResults(housingData);
    }, 1000);
}

// Export for potential use in other scripts
window.housingDirectory = {
    showDetails: showDetails,
    loadData: loadHousingData
};