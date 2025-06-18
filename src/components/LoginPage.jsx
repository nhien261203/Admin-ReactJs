// src/pages/Auth/LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const LoginPage = () => {
    const [form, setForm] = useState({ login: '', password: '', remember: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Đăng nhập với:', form);
        // dispatch(login(form)) nếu dùng Redux Toolkit hoặc gọi API bằng Axios
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md space-y-6 p-8 bg-white shadow-lg rounded-xl">
                <div className="text-center">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhATFhUWGBUYFxgVFhUYFxUVFxUZGhYaGhgYHSggGhonGxUVITEhJSkrLi4uGB8zODMvNygtLisBCgoKDg0OGxAQGzAlICItLS0tKy0uLS0uLS0tLS0tLSstLzUtLS0tLS8tLS0tLy0tLS0tLS8rLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYEBQcDAv/EAE4QAAEDAgMDBwUKCQsFAAAAAAEAAgMEERIhMQVBUQYHE2FxgZEUIjKhsSMzQlJic5Oz0dMWNVSDksHC0vAXJDREU1VjcqOy4RUlgqLj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EADcRAQACAgAEAwYFAgUFAQAAAAABAgMRBBIhMTJBUQUTImFxgZGhscHR4fBScpLi8RQjQkNiFf/aAAwDAQACEQMRAD8ApTtSvQcKEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEEu1KCEBAQEBAQEBAQEBAQEBAQEExsLjZoLjwaCT4BBtqTktWy+hRzdrm4B4vsFWb1jzW5Z9GNtbY1RSkNqIXRl2l7EG2tnNJafFTFonsiYmO7BUoEBAQEBAQEBAQEBAQEBAQEBBLtSghAQEBAQEBAQEBAQEBAQEG+5DbNjqa2KKXNhxOLfj4Glwb2ZZ9QKpeZiu4XpG5dq2hO2kgc+OHJjSQyJoucIJs1otc5ZDivN4nPOOsa7zOo32j5y7sOOLz8o69GDQ7akdKGuieI3RtfjdhFnOPoFuocBYrzcXHZKzHPaJ661+8T6Ou/DVmPhjXTf9GHzn0nSbPlNrmN0bx1WeGuP6DnL3sc6s8vJG6uIrpc77gixODb2uVTJfkrNvR0cLw88Rmriidc09145M8gn1LRIC0MxFpc/M5C5IYNc7DMhcE5suTtOofR5OG9n8BPLes3vrfXt/H5S0nKbZgic9gwkxOLSWiwIBt/HDNTw2SYycsyv7X4bHm4OvE46csxqe3lP8d/or69F8iICAgICAgICAgICAgIJdqUEICAgICAgICAgICCWtJIABJOQAFySdABvKC1UHN/WS0zqnC1mHERHJibI4MvfzS3LQ2vr4LOctYnTSMczG1TBWjNKDa8lK4QVlPK42a2QBx3Na+7HE9QDiVW0brMLVnUxLv1TAJG2v1gheZxPDxnpyz09Hfhyzjttp49nQ07scsrW20MkpJA1sDIchkMhrYLiw+zr88TkmNR11Ed/r0h0X4quvhjr81e5fcs6XySWCGVk0krSy0ZxNaDk5znDLIXsNb26yPbx453uXm3vGtQ5IFuwfTXlpDhqCD4KLVi0TE+bTDltiyVyV7xMT+C07M5YOphihmc2+rLXBNt7TlfrXmV4bNE6h9hxXtL2ZnxxbJ1n0iJ5o+Xl+c6aGr2s6S4w2B1JN3Hef4zXVi4WKTzTO5eTx/ty3EY5w46ctZ/HXp6R+bDXU8EQEBAQEBAQEBAQEBAQS7UoIQEBAQEBAQEBAQEGy5NbV8kqoqgsDxG4kt0uC0tNjuIxXHWFW1eaNLVnU7dM2zzm0s1JMyPpWTPjc1jXs3uGH0mkgWBJ13LCuGYt1bTliYchXS5xB9MjJ0BKDPZPU4BGKiVrBo0SvDQOFgbW6k5Y9DmYh2aSbudc8cyfEqUbffkJGhHrQ2+HUrhuv2KNJ28SLaoPnAEH0gICAgICAgICAgICAgICCXalBCAgICAgICAgICAgICDK2Zs6SokZFGLue4NF9Lk7+reVEzqNpjrOna9lchqCmYGvgZPJYYnygOuepp81o6h3k6rlnJaW/LSvdsBsag/Iqb6OP7FHPf1RunpCTsOh/Iaf6Nn2Jz39U/B6Pk8n6D+76f6KP7E57ep8Hof8AQqAf1CnH5uP7E57+qPg9EnYtD+Q0/wBHH9ic9/U3T0eE2w9nSAsdRQWOV2NaCP8AyZYjuTnvHmjmxz5OW8u+SQopmiN945QXR4jn5tsTb77Ym58HBdOO/NCl68stRyZp4X1cMdSD0T3YHWdhILhZmfDEWqbzMR0RXUz1dtp+QOzmCwo2H/OXvPi9xXJOW8+bpjHX0arlByX2LHYTiKBzh5tpXRntDQ6xHWQQrVyX8lLxjjv0UrlNzeuij8po5fKILYsrF7W8QW5PHWLEcFrTLEzqVLY+m46qOtmQgICAgICAgICAgl2pQQgICAgICAgICAglrSSAASSQABmSToAOKiZiI3KYjb3raGSEgSxuaTpe1jxzGV+pZ4s+PLG8dolpkw5Mc6vWY+qKenvmdPatmUytXN2++0qYNAwgyXP5mS1u+yzy+CVsfjh1+RuIEHO+q5F5jfd4ijZ8X1lTtX3dWQoXEHnLC13pC9lKtqxPdi1ULHZW3W1OnBNqXrWXlT0rGXwi19cyfakztWtK17KZzyX8lpSDm2Z4B6sF7ezwWuHvLW0/BDncZEzLOydbXQg8R3rpZdncebjlT5bT4JCPKYbNlG91smyDqdbuNxwvxZKcsuyl+aHNtpzRt2vK7aDHPjEr8Tcz7nY9DlqWBuA23hXjw9HFaY95POv3NpKxz600zXNozKzoGuvk7B7rYHQE4TbdcLO/lt0YNdeXt5KVzp8lxSzCeJtoZibgaRy6kDgHC5A3Wdust8V9xqUZK6najLZkICAgICAgICAgl2pQQgICAgICAgICAgsnIjY75ZmzWtHEb4iMnP8AgtHE3IJ4W6wvL9q8VXHhnH/5W/T1d/AYJvli3lDeVNO2RhY8XB9R3EdYXy/D8RfBki9P+fk+w4rhqcRjmlv+PmpcmLpHQPyLDY2yDxa4I4Agg96+4w5a5scXr2l8HlxWw3mlu8LXzei20KYdcn1Mitl8Eox+OHTq/a0EBDZZcJcLgYXnK9vgg7wuPq3inRi/hPR/lH+nL+6nX0OT5n4T0f5QPo5f3E6+hyfNP4TUf5QPo5f3E6+hyfNrqnl5s5pLTWAEZH3Kc+sMTVvRE0+bH/DvZv5aPoqj7tNW9FfdfN6U/LTZ73tY2sBc9zWtHRTi7nEBouY7akJ19E+6+bS88ZtTUwP9vIP9NbYJ6/ZS8fD93PaWLFG3cRex7yuli9KSsmhlbPA8snj4fCG8EfCad47N4Ci1YtGpWrM1ncLzSc4WzazCNqUbWSty6QMMjD2Fvngb8JBHWuacVq+FtzUt4oXah5Z7KZG1kVZSsYB5rQ4MAH+U2t4LOaX9GsWrEdGh5dcsdmVFLLTiqa+RwvH0bXuHSNzZ5wGEZi2uhKvjpaLb0re1ZjTj66nMICAgICAgICAgl2pQQgICAgICAgIPSmgdI9sbGlz3kNaBqXONgPFJnSV65O8iY8UhqXY3RSGMsaSGYmtaTc+kRc23aLx/afH3wTFKecb39d/w9HhOErk+K/kuzYWtbga0NaBYBoADRusBovmb2teZm07mXs0iKaiIe9WIPJg8sjab2fYNBcbEEdZ3r0LRjycJF41Ex38tz/fVjS2aOI5NzPp36fP6OR8soMJjmGWrCey7mftr0PYWfdbYp8usfuw9vYNXrljz6T9YZ3Nq8ybRpn6NBksOvoJAV7eXwS8PH44WznB9+i+b/bcuWvm6Y7QqyukQY+0KKskjJpqWd7d8jGOIA3hvxj2Xt2puEKO4EEgggjIg6gjUEcVZCEGfyf8A6XTfPwfWtUW7SR3dP56GXpqcf48n+wpg7/Zlknp95c62VJ5oadc7dYuV1Qxlk1DPhDUesIQxK+la8B4HbZJhMNeaIfGKrpO30ykAzuU0bZClAgICAgICAgICCXalBCAgICAgICAg2XJqvbT1cEz/AEWSNLupt7OPcCT3Kto3WYWrOpiXXNpgQVRkuDBVhrmPB80TBtiL6Wc0NIO8grxvaXDzmwxevip3/wAvr9p/V6vCZYpflntP6pmr2NvqbXJsOGq+Yi251HV7Hu51uekK3+ENLLceURZkluJ1gCd1zbI8V1RwPF17451+KKcbw9ZjV49O7ScvWgUrWluFzpG4dDcBri4i2o0z6wvR9jVn38zrWo6uX2zlrOGsRbfXo8uak/z6nHB0nrgevpMvgl87j8cLdzge/RfNftuXLXzdMdoVZXSwJ9psbNFESLOkiEhvkyNz2h+e44SezVNIdR29tCqhrmRUjMbeiZeK3mWxOF+DMgBe403rjta0W6Pf4Ph+Fvwc2zzrVp1Pn2jp8/o5pzwwsbXghrWyPhjdM1puBIS4a2FzhDc7cF14966vCyRWLTy9lHV1Gw5OtJq6YAX93g+taot2lMd3UueZtqan+fk/2FTw/f7Mcvb7ubQx3iaRqLn1ldLFmRPxAFEPKIWLmHQ5jsOqJYL22JHBQlCAgICAgICAgICAgl2pQQgICAgICAgICDMbteoEJp21EgiPwMV2jsB07rKNRvfmtFpjotfN9t4x4Yqgi2kbyQbgnJrr+on9Wfz/ALR9nzS//U4o/wA0fvH7/i9fg+M56e4yT9J/b+PwablhsDyaqJDT0EpxNcNGl2ZZfqJ4DLTRepwPGU4ikanrHf8AnyedxXD2xW7dJaWGga65uRuG+wXbEOaVt5tKfBtCnF73dJ9TIqZfBK+Pxws/OB79F81+25ctfN0x2hQ9tbT6IYWC7z1eiOPb1K8aW5LeirdE91zhceOROZ4qdwe6vyzblnUeelr2by82nBEImSEgANa58Qc9oGgDiM7fKuo5aq7lWqt00r3SS9I97zdznBxLj15KyHxDRyPcGtjcSfklBdeSuyRBNCSLvMkdzb5YyHUqWnotC0c9X9Hp/nn/AOwq+DvP0YZe33c72f72O/2ldLBFNk5ze8fx4ImU1DgHNN99vFEDqQvcSLWsCTfT+B7FjmzRj7vT9nez8nGTMU8u8+n/AD+z52hsySElrxYg2N8rHrvoq4+Irfp5rcV7LycPWL7i1Z7THb777MJbvNEQICAgICAgICCXalBCAgICAgICAgICDNkHmsHW32KUMzalZNJD0TpnFjcw06EjS51XPThMNLzkrWImf7+jW3EZL1ilp3DC2YHBgDh2HiuiGUrZzffjGn7ZPqZFTL4JWxeOF65S7B8pc1zajonNZhHueO2ZN/Tbx0XH2dNckV116qi7myeTc7Ukuf8ABP3ydP8ADDaONyx/7LfjP8vuHm4lYbs2tK08RCQR2ETXHco6b3ywmeOyzSaTeZie8T1ZH4D1f9+1X6Mv36tzfJz89fVLeQ1WdNuVX6Mv36c3yOevq29FySnjbb/qtQ473O6Q37Pdch1Jv5Lc0PdnJd5fG+SufJgc1wDmOOhBNrvNr2Ub+RzQ0fPSf5vTfPP+rK2wd5+jHL2j6uebP97Hf7Sulgs3IXk0K2qOMnoo2Bz7GxcSSGtvuBsST1dd1nlvyx0aY6c09XX9kspA1zacQYY3FjxHg81w1DrfC7c1yTMz3dVeXyVPnG2JnHOyMYfRkDAAczcO694z6lhkpa3Z73sfjsWCLUvOt9Yme2/m5hyq2iXSuab9I95e640aSXZ7s7rXhsVufnse1+PwRwteGw2iZ6du0RHz+bTL0HyogICAgICAgICCXalBCAgICAgICAgICDPl0Z2j2KUPWf0T2FEPmm9EISs3N9+Maftk+pkVMvglfF44dFqX6ee8f5WYr/8AqVyIl8NfazjJIRfToxn3Bl7daD08rb8v9B/7qG3qyQG3pZ/Jd68skTHVkMkaPjfou+xQ0jo9giRBz7nmdempvnn/AFa2wd5Vv4Y+rn2z/ex3+0rpYuqc0VA9rZp3ZMkwNbxdgL8R7POt4rm4iY3EOnBHSZWyr5M0skM0HRBrJ3Ypej80udcHFcb7gLDctJpWYmPUk2CDLBIJpWxwxuj6HFeORpbhGMH0iBx4BNnJ1hUttbBpKySQtgDcJwNki80uwtBJFsnAFxGYIyXmcTxvEYc0cnaY7T1if7+Tsw8NhyY55u8T3cp2xs51PM+FxuWnIjRzSLtPgR617fDZ658UZK+bzcuOcd5pPkw1uyEBAQEBAQEBBLtSghAQEBAQEBAQZlBs2Sb0RZvxjp/z3K1aTZEzpvG8m48HpPJ0xbgToLdxy6lr7qOyOZp6qMtbY6sIv3Zf8rGY0mHsRcdqlDwoj5tuBIUQmVp5vvxjT9sn1Mipl8ErYvHC/wC0JLYfdJm5H3uLpAe04HW9S4bS7OFpzRPw1n/Nbl/D4qsdshIJ6eqyte9OAc+AMNz3aKPvP4f0dE1rFor7vH1/+/T1nn1H37vSGQuGES1IIN8RpyDa2mcVuvS6b+c/h/QnDq3NNKa9Of8APx7/AD0zGPsLdLP9D/8ANN/Ofw/oe7j/AAU/1/7n02Qk26Wfvht6+jTfzlE1iI3yU/1f7mVJE6w91cLDMgMz6zdvsVtOauSsbmaxP49PzYrmPuPdnkDUWjs7ts2/gmp9UWzUmsxFI+u7dPz0pfPB/Rab55/1a3wd5YW8EfVQdn+9jv8AaV0snjNTiSQ3J80buP8AF0T5NrRbfrqRrWU1ZI1twAx4a9oHAB4OEdQsqWpWe8LVvaPNky8uqtz+jrah5heMzE1oLdxBa0NxA9d+9cfFcNa1f+339PV0Yc0b+NcNlcraJkRMNSLRMc7CbtkIAJdZrwMRPUvAtw3GVyRMxMTPTfeI3+kPVrm4eaTET26/NzLae1XVUr53Nw4j5rdcLQLNF95sPG6+l4XBGDFGOPJ42bLOW83nzYq6GQgICAgICAgIJdqUEICAgICAgIM3Y0LXzNa/TPLiQLgK1IiZ6onsv9NGxsZkw4y12HDoxoIu0kDMg2cLC3o56hbTM83L2RGtbZ00sri51UcIczBZws84fQLGa5OzubDNwvms4isajH/f3XmZ/wDJSOUQbiaMsRacQ6vgn2+CvkhnDXUzrtHEZHuWK0vMebJ1O9v8e1Baub78Y0/bJ9TIqZfBK2Lxw6LLM4ODWsDiWk5uw2AIHA8VwzM71ClrTE6iE00znPLSwCwJ81+LMYcs2jOzgkWmZ0mlpm2phnh5HwD4t+1WbJa8/FI7x9qJfbjZBjSSX7EZzO0MZdCI2o/PHbyWmt/bP+rW2DvKb+GPq57RvtEDwv7Sulk+6RuVzq7NITIc3j5I9ZQYVXZzjfMaeCiUwxHUbUS9wiEoCAgICAgICAgl2pQQgICAgICAgljiCCDYg3B4EILns7bzMGIyNY4izwSBoQcr65gEWXRFq2jqr1js1W2eVj5HHoyXOOsj8ybC2QPVvPgqc8RGqp1vrLRQSHHjeSSdSTdZ7SzT5r+p3tRD0qIsQtv3dqIb/m2lxbQpwdQZL/QyLPL4JaY/HDpc9GXua62QaRcOwkOu0gjwK4bV3LO2ObTtkQU5BAwAANcMzfEXFpufAqYhpWsxPZ6tg4sZ3BWX0+XRW+DH6/sRE9GHLCXasi9f2KVJ6vqOj+RGAR52Rz6tNEIqdFoAyMNB3Xv26aoSp3PB/Rab55/1a1wd5Wt4I+rm9H57Wt+CL368yuln2bCR4aL8EQxwcDCT6TvaUSwlCRAQEBAQEBAQEBAQS7UoIQEBAQEBAQEBBACCUGZA4PbhOoUoesEnwXekPWOKCxcgIf8AudM7feW/X7hIs8vglfF44ddLgFwZM1MfilvTHa/hYEe0rzmHBpfzr9V9LKYvu2nZfguXhozb+3300/OBtU00LHte4EuIAaSC7zSbZblrWNvMyW1Db0kpdGxx1LGnxaFCN7eO1y9sJc2+70fStvss8kzFejPNuKTMPWiJ6NlyTdoOZ4i/61NPDC2PwxtXYtpzS1jAyORjQMMjXejkXHFwBzFjvsFlF7Td9NfgeGw+z7Te1bWnrWY7+XT1+vo1nPKCaSmA/tn+HRrtw95fPT4I+qhbNaBGO/2ldLGX2xpkcLC4GnyindLZw7ELzeU2aNGjU9p3LWMfqjadq7DYGF0QILc7XJuN+u9TfHGtwRKtrBYQEBAQEBAQEBAQS7UoIQEBAQEBAQEBAQEGTS0j3ec22R3lY5M9Mc6l6PCeyuI4qk3xxGo6dZ1v6M2qpDYG4vuI3H7FGHiIyzMRGl/aPsm/BVra1omJ6enVvObmb/uNO12Tryd/uMmi0y+CXm4/HDrco0XjcdS1ojUb7u/hLREzuVeqC9lTI5rHXwPLThNriPLO1tVv1i0z/fZ2cRlr/wDm6rMbjy317z5d1V5YR1M9KzFHK94mdkIzcN6PgBpcla8Na0xPM+YxWyWp8fff7L/s9mGKPEM8DMjrfCNVd2R07vqeQ2uuTjc1sWKbV7/o6OFx1y5YrZEZO9OEnNNN5dfLX7nExii2sf3auo2k4VTImkOaRZwtm12ZvfsstLZJ95FYeZbNMZopHbzV7nhP81pvnn/Vrsw95dlvBH1c5orvYBo3O545ldLPst+y4GtjaWgZgG/b+pdFIiIUl0bk3sBrqYCdl8T+kAvbLDZt7cczbrC4c+eYyfB6adWPH8PxK5yromQ1LmxgBpDXWGjbjMeq/eurh7zam5Y5axW3Ry7asTWTyMbpcEDhcAkeJVbxqSOzHVAQEBAQEBAQEBBLtSghAQEBAQEBAQEBAQZdFXGPK128N47Fz5uHjJ183sezfa+Tg/gmN07684+n8foitrC91xcAafrKnh8Pu69e6ntX2j/1mX4fDHaP1mW35JbZZBVwTSZBj8zwa5pY49wcT3La8c1Zh5dfhtEu5VMFwHNAe05gixFjvHELi23tWfJhmiJJPRm51OHVNsuW3o+hQYR711+jkDx7U2nkmPJPk7/iO8E2jlt6Hkz/AIjvBROp6SRW0Hkz/iO8FMajpBNbSiLZ5xXEYBOpsB4lR07kYp3vTmvPXtGMugpGuBMWKSTqc4AMHbbEbdbV0Ya95lbJ01WFAgqCYwBkM+/MrfbLSw8ma7WFx62frH6/FbYreStoXUcrJoYWs6RrGsyxEAutuHnXGWgsLqLcPjm3NK0Zba1Cjba5WPkcSwkk6yPzcewHTv8ABOeIjVYRqZ6yrrbk4je5zJOpJWcpeqgEBAQEBAQEBAQS7UoIQEBAQEBAQEBAQEBAQEG32dyrrqZmCnqnsaNGkMe0dQEjTh7rKs0rPeFovMdpe45ytqb6tw/M0/3ar7unonnv6/o+v5RtqH+uu+hp/wBcSn3VPQ95f1P5QdrflzvoKb7pPdU9D3tj+ULau+ud9BTfdJ7qnoe9sg85G1B/XHH8xT/dKPdU9D3l/V4VHONtRwLfK3gHhFC09xbGCO4p7unoc9vVVi18jiXFxJJJc65JJ1JJ1KuhnxtsAOClD6BRCZnF9sTnG2lyT7VO5HwGgKB9ICAgICAgICAgICCXalBCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD//Z" alt="UI Unicorn" className="h-10 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-gray-800">Nice to see you again</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Login</label>
                        <input
                            type="text"
                            name="login"
                            value={form.login}
                            onChange={handleChange}
                            placeholder="Email or phone number"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={form.remember}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <span className="text-sm text-gray-600">Remember me</span>
                        </label>
                        <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-semibold"
                    >
                        Sign in
                    </button>

                    <div className="flex flex-col gap-2">
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 w-full border py-2 rounded-md hover:bg-gray-100"
                        >
                            <FaGoogle className="text-red-500" /> Or sign in with Google
                        </button>

                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 w-full border py-2 rounded-md hover:bg-gray-100"
                        >
                            <FaFacebookF className="text-blue-600" /> Or sign in with Facebook
                        </button>
                    </div>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Don’t have an account?{' '}
                    <Link to="/register" className="text-blue-600 hover:underline">Sign up now</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
