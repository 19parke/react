import React, { useContext } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { RouteContext } from '../../context/RouteContext';
import { useSelector } from 'react-redux';

const Job = () => {
    //1. 쿼리스트링 방법, 훅함수 이용
    // const [searchParams] = useSearchParams();
    // 키값에 대한 value를 가져올 수 있다.
    // const title = searchParams.get('title')

    // 2. url 파라미터 방법
    const {table} = useContext(RouteContext);
    const {title} = useParams()

    // redux값 가져오기
    // const {name, skills} = useSelector((state)=>state.jobs)[title]
    const jobs = useSelector((state)=>state.jobs)
    // const skillList = skills.map((skill, i)=>(
    //     <tr><td key={i}>{skill}</td></tr>
    // ))

    // console.log(name)

    // redux에 있는 jobs를 키값 title로 가져오고 싶음

    return (
        <div>

            {title && jobs[title] ? (
                <table style={table}>
                    <thead>
                        <tr>
                            <th>기술</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{title}</td>
                        </tr>
                        <tr>{jobs.name}</tr>
                        {/* {skillList} */}
                        {jobs[title].skills.map((skill, i)=>(
                            <tr key={i}><td>{skill}</td></tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1>존재하지 않는 페이지입니다.</h1>
            )}

        </div>
    );
};

export default Job;