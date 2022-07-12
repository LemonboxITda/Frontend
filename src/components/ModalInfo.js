import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import { putApi } from '../api';
import { AuthContext } from "../App";

const Wrapper = styled.div`
    .modal {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .modal button {
        outline: none;
        cursor: pointer;
        border: 0;
    }
    .modal > section {
        width: 90%;
        max-width: 500px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show 0.3s;
        overflow: hidden;
    }
    .modal > section > header {
        position: relative;
        padding: 16px 64px 16px 16px;
        background-color: #f1f1f1;
        font-weight: 700;
    }
    .modal > section > header button {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
    }
    .modal > section > main {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
    }

    .modal > section > main button {
        margin-right: 10px;
    }

    .modal > section > footer {
        padding: 12px 16px;
        text-align: right;
    }

    .modal.openModal {
        display: flex;
        align-items: center;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-bg-show 0.3s;
    }
    @keyframes modal-show {
        from {
        opacity: 0;
        margin-top: -50px;
        }
        to {
        opacity: 1;
        margin-top: 0;
        }
    }
    @keyframes modal-bg-show {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .modal > section > main {
            font-size: 14px;
        }
        .modal > section > main button {
            font-size: 12px;
        }
    }
`

const ModalInfo = ({ open, close, header }) => {
    const authContext = useContext(AuthContext);

    const save = () => {
        
    }

    return (
        <Wrapper>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <header>
                            {header}
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main>
                            
                            
                        </main>
                        <footer>
                            <button class="btn btn-primary save" onClick={save}>
                                완료
                            </button>
                        </footer>
                    </section>
                ) : null}
            </div>
        </Wrapper>
    );
};

export default ModalInfo;