import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Company } from "../types";

const SurveyView = () => {
  const { id } = useParams();
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    try {
      // Fetch company data
      const getCompany = async () => {
        const response = await fetch(`http://localhost:1337/companies/${id}`);
        const data = await response.json();
        setCompany(data);
      };
      getCompany();
    } catch (error) {
        console.log('Error fetching company data:', error);
    }
  }, [id]);

  if (!company) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        <p className="text-2xl text-blue-500 mt-4">Loading...</p>
      </div>
    );
  }

  if (!id) {
    return <>ERROR MISSING SURVEY ID</>;
  }
  //POST /companies/:id/employee/:employeeid
  // Tonne post request sittenku survey on valmis.
  /* ESIMERKKI:
  URLIIN: http://localhost:1337/companies/fc67c1b4-db53-4036-a3ce-c172c8c78ce9/employee/e5ed7da8-c014-48df-8d8a-59be08230ba1
[
  {
    "wbName": "Work-Life Balance",
    "answerValue": 2.5
  },
  {
    "wbName": "Workplace Safety",
    "answerValue": 1
  },
  {
    "wbName": "Mental Health Support",
    "answerValue": 3
  },
  {
    "wbName": "Diversity and Inclusion",
    "answerValue": 3
  }
]
*/

  return ( <div className="container mx-auto">
    Welcome to the survey for {company.companyName}!

    
  </div>);
};

export default SurveyView;
