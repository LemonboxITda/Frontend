import React, { useEffect, useContext, useState } from "react";
import { Checkbox } from '@mui/material';
import { FaRegLemon, FaLemon } from 'react-icons/fa';
import { Colors } from '../../styles/ui';
import { getApi, postApi } from '../../api';
import { AuthContext } from "../../App";

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
    const [supData, setSupData] = useState(initialSupData);
    const [supInfo, setSupInfo] = useState(initialSupInfo);

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
                            }
                        ));
                        // console.log(supData);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getOneDayPill();
    }, [authContext.state.token, date]);

    const onClickOneSup = async ( name ) => {
        let postStatus;
        if (supData[name].status === 'IS_NOT_CHECKED'){
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
            // console.log('status:', status);
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
                        onClick={() => onClickOneSup(name)}
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
            <OneSupplementComp name={'vitamin'} />
            <OneSupplementComp name={'probio'} />
            <OneSupplementComp name={'omega'} />
        </div>
    )
}

export default LemonCheck;