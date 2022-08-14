import React, { useEffect, useContext, useState } from "react";
import { Checkbox } from '@mui/material';
import { FaRegLemon, FaLemon } from 'react-icons/fa';
import { Colors } from '../../styles/ui';
import { getApi, postApi } from '../../api';
import { AuthContext } from "../../App";
import { CalendarContext } from "../Calendar";
import { Link } from "react-router-dom";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const initialSupData = {
    'vitamin': {
        "supplementId": null,
        "date": null,
        "status": null,
    },
    'probio': {
        "supplementId": null,
        "date": null,
        "status": null,
    },
    'omega': {
        "supplementId": null,
        "date": null,
        "status": null,
    }
};

const initialSupInfo = {
    'vitamin': {
        "korname": '비타민',
        "color": Colors.vitamin,
    },
    'probio': {
        "korname": '프로바이오틱스',
        "color": Colors.probio,
    },
    'omega': {
        "korname": '루테인&오메가3',
        "color": Colors.omega,
    }
};

const LemonCheck = ({ date }) => {
    const authContext = useContext(AuthContext);
    // const calendarContext = useContext(CalendarContext);
    const [supData, setSupData] = useState(initialSupData);
    const [supInfo, setSupInfo] = useState(initialSupInfo);
    const [checkNone, setCheckNone] = useState(0);
    let supList = ['vitamin', 'probio', 'omega'];

    useEffect(() => {
        const getOneDayPill = async () => {
            await getApi(
                {},
                `/pill/date/${date}`,
                authContext.state.token
            )
                .then(({ status, data }) => {
                    // console.log('GET one pill', status, data);
                    if (status === 200 && data.statusCodeValue === undefined) {
                        data &&
                        data !== [] &&
                        data.map(sup => (
                            supData[sup.name] = {
                                supplementId: sup.supplementId,
                                date: sup.date,
                                status: sup.status,
                            },
                            setCheckNone(checkNone => checkNone + sup.supplementId)
                        ));
                    }
                    // console.log(checkNone);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getOneDayPill();
    }, [authContext.state.token, date]);

    // // Checkbox 이슈로 주석 처리
    // const getThisDayTF = async () => {
    //     await getApi(
    //         {},
    //         `/pill?startedAt=${date}&endedAt=${date}`,
    //         authContext.state.token
    //       )
    //         .then(({ status, data }) => {
    //           console.log('GET this day pill t/f', status, data);
    //           if (status === 200 && data.statusCodeValue === undefined) {
    //             if (data[0].isChecked) {
    //                 calendarContext.dispatch({
    //                     type: "checkAll1day",
    //                     check: true,
    //                 })
    //             } else {
    //                 calendarContext.dispatch({
    //                     type: "none",
    //                     check: false,
    //                 })
    //             }
    //           }
    //           console.log('check', calendarContext.state.check);
    //         })
    //         .catch((e) => {
    //           console.log(e);
    //         });
    // }

    const onClickOneSup = async ( name, checked ) => {
        let postStatus;
        if (checked){
            postStatus = 'IS_CHECKED';
        } else {
            postStatus = 'IS_NOT_CHECKED';
        }
        
        await postApi(
            {
                supplementId: supData[name].supplementId,
                date: supData[name].date,
                status: postStatus
            },
            `/pill`,
            authContext.state.token,
        )
        .then(({ status, data }) => {
            // getThisDayTF();
        })
        .catch((e) => {
            console.log(e);
        });
    }

    const OneSupplementComp = ({ name }) => {
        return (
            <>
            {
                !!supData[name].supplementId &&
                <div>
                    <Checkbox {...label}
                        defaultChecked={supData[name].supplementId && supData[name].status === 'IS_CHECKED'}
                        onClick={(e) => onClickOneSup(name, e.target.checked)}
                        icon={<FaRegLemon size="20px" />}
                        checkedIcon={<FaLemon color={supInfo[name].color} size="20px" />} />
                    <span>{supInfo[name].korname}</span>
                    <br />
                </div>    
                }
            </>
        )
    }
    
    return (
        <div className="lemonbox">
            {
                checkNone === 0 ?
                (
                    <div>복용 중인 영양제가 없습니다.<br /><Link to='/mypage'>마이페이지</Link>에서 영양제를 추가해주세요. </div>
                ) : (
                    supList.map((sup, i) => 
                        supData[sup].supplementId !== null &&
                        <OneSupplementComp key={i} name={sup} />
                    )
                )
            }
            
            {/* <OneSupplementComp name={'vitamin'} />
            <OneSupplementComp name={'probio'} />
            <OneSupplementComp name={'omega'} /> */}
        </div>
    )
}

export default LemonCheck;