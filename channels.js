var channels = [{
  "name": "102.1 THE EDGE",
  "channel": "955",
  "category": ["Radio","Rock"],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "104.5 CHUM FM ",
  "channel": "990",
  "category": ["Radio","Rock"],
  "subscribed": true,
  "icon": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJcAlwMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIEBQYHAwj/xABAEAABAwMCBAMFBAcGBwAAAAABAgMEAAURBiESEzFBFFFhBxVxgZEiMjOhFiNCcrHB8TZSU9Lh8DQ1c4KissL/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADERAAICAgAFAwEHBAMBAAAAAAABAgMEEQUSEyExFCJBUQYVMkJxgbEjYZGhM0NSJP/aAAwDAQACEQMRAD8A7jQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUBGTWNgZ+FNmP0GT2pvuZ+BmmwRxHsM1nYJBoBmgIJPamzAz6VgyTmsggk1gfIBrJjZOaAjiNYRkmiBNZAoBQEGgMHrG+q09ZlTkM85fGEJSTgZPc11oq6k+Uj5F3Tjs5HJ1lqB99bvvJ1sKOQ22AEp9BV9Xg1Jakijnm2t7TOj+zG5TLnZ5D0+Qt9xMgpCl4yBgbVUZ1ca7NRLbBslZDcjB641zKYmO2yzLDZaPC9Ixk8XcJ+HnUjDwlL3SI+Xm67RNQF41HyfHCdcOTn8bJ4M/wqc6Mbm5NdyD1shLn+DctD65ky5zVsvCwpbuzMgDBJ/uq+PY1AysJQXNEnYua5NRkdHJO/WqvvotjmXtC1hKZuabdZ5amQx+O4jGSo/s/KrbCxYyhzTKfNy2pctZrEbVd/MhlKrrJILqQQcefwqXZiVcm0iJDKu50mzuyfuivPvyehi9ruDWPg2+Tj2s9R3mFqefGiXF9pltSQhCcYH2QfKrvExq51KUkUWVlWRsaizFNal1Q6OJqfNcT5pTkfkKkPHx1+U4rIyH+YzWjr3qCVqSCzNlTFR1qIWlxGAfsk+VRcqqqNbcUSMWy6VnuOuiqYuyayBQCgINDDMPqiyN3+3ohPOqbb5qXFFI3IHaulNrqlzI5X1KyOmcc1rBj2zUsqHDbDbDSWwlOc/sJ/nV9h2Ssr3I8/l1Rrs1E3v2WOcnSk53uh9avokVW56/rpFnw96pZyx1an31rUftOKJJ8yTVynyxKeXun+53v3ZHGmvd/LHK8NwY/wC2vOdR9Xf9z0fTXS/Y4Kwtcd9DiDhbKwoH1Br0UvdBnnV7Zr9Ts+r9TostkacbUPGykfqUdxtur4DNUWNju2zXwXuTkquv+5oWgNPqvN0VOlhSokZXGtSh+K51x/M1Y5d6qh04FbiUu2bsma4ra8H0lf8A3Uv/AK9/2I3brL9T6Blv8iMpwbnbHxrxmfkelolZo9VTFWNIsINweekBDmClWwIHSqTh/FrLL1XZ8ku7HUFtHINdL4tW3M7fiAf+Ir6VhbVKPGZenfIzOj9axbBaEQX4LzquYpZWgp6H0NRsnCsslzpkrGzK648rRvmndWWi+uBmI4W5IGeS6MKPw8/lVbbRbWtssqr6pvSNjFRkSiayBQCgBrDBSqhh+Dh3tH/tjcP3Wv8A0TXoOHv+ieezl/VZuXstRztLTmR1U+tI+aRUDP7XIncP70tHLX21xpDjS0kLaWUkeRBq5WpQ2ipa5bO/1O7ru8f9FzcuYnl+F48g9+Hp9a85031tf3PRdSPR2n8HB2G1yJCGkjK3VhKR6k16KWoVts89GLlYjoftKs9wkyrX4KI8+lqIW1KbRnBBFVuDdGG+Z/JY51Mp65V8GstRNUwI/Cw1cWGE5UUpyAPOpjWNOXM3tkOPqIR1o1/iWtXGCStRznO5NSu3K9kXvzHUfZxGu3irgi8omFpxtHB4hRIzk9M15/iNNFtXIi74fK6Mm5G8R7e1HVxJyVds9qosfhtVEudeS5nfKZjXNPaemzH33IcV99ayXFHc5q3V1qWtkB01SbZqHtGsFjttuS/CbbjTC4kIbQfvjvt/Op2FfdKen4IObTVGG15NCtMh2Pcob0ckOJeRwEfGrTIjGVctlbQ2rFo+iGySEk7d68v8s9PF+1HpQ2FAKAGgKVVjejD8HJtcaXvlx1NMlQrc48w4EcK0rSM4QAep9KucPJrrr5ZMpcrGtnZuKNp9mlrn2m0SmLlGUw4qQVpSog5HCB2+FQ822Nlm0TMCuddbUkYrW+hHp0ty52ZKVPOHLzBPDxHzHqa7YmZ0/bI5ZeG594o0v9HNShPhfdtw4M55e/Lz9cVYeqx983Yr/TZH4Tc9EaEfhTG7leUoS63uzHB4uE+ZPnVflZvP7Yk/FwXB80jouOm9Va7Fr+ha3NDjlvktspKnFNKCR5kit62lLuaWqTi9HFE6L1KAke6Htsb8aP8ANV9LKocNJlCsO/n3o7kzngTxbKwMj1xXn5acuzL6G1FbK1dMZ61jwb+Uci1dpi+J1BNl22FIWw8vjC2FgEkjfYHPWrrGvp6aUtFJkUXue4mCGmNRSXBx2qctZ24ne3zJqT6jHiva0R/TXy8m56O0BIiTWp965fE0QpuOk8WFdio+nlUDKzlKLjEnY2C4yUpHSB19arEWu/gqrIFAKAg0Ba3B9cePzEAE5xvVfxLKljUOyJ1ogpy0zF+9nwMkNADuR/rXn1xzKseoJbJUsauK22UIvLjm6OSrHken510s4vmQluUP5MKitp6ZULw+Rtyj8K0fHMmOtx1v9TMcaEn7Xse93SeEBony/wBmsvjeXGKco+TX09LfZhF4eUPs8o7Z2/rWtnG8qtJyj/Jsset+GSLw8Tj9VxeQrZ8ayorm5e37j01f1IF3eOQOST5D+tYs43lLUuXX+TCx6m9Jg3l1OyuSPj/WsrjOU9tRWg6Kk+VvuSLs+BuGwB6Gua45kP8ACk39Dd4sdbbI98vebP1/1rt97ZjaXJ/Jy6NPnmIN5dTueVg9PX86wuM5b7KH8mXRT27+Sfe7/Dkhod81ouOZMnpR7m7xaktt9iRd39scogeVbR4zkqcVOOtmqoqknyszjZKkpPmK9VVJyimyFrRXXQwKAUBB6UBYXjeEev3hVLxxbxWiRi/jRya5Kkag1Su3KfW1EZURwpPZI3OO5NWGJGjhnC1lShubRUXznlZvS5tRRno2nYNsQ+/EU7xlhaSFr4gRiqCfGrsu2FdkVrey0+7oURbhJmr6Tvce0tyUSGn3C4pJBaTnGBXp+OcJszXX0pKPb5Knh2bHH5+bbPbT0lErVct9IUlC23VBKuo2rbiOMqeH1wem013Rrh28+TKW/Oy89nWT49St/udfnVX9qoJVV6JvBnuye3s8LL/bC4eQS8cVLzo64TQ0vJwx3KWZYm+xiNPvrg3WDOWcMuPKbUc9Qdjn61bcQx4ZGI6q17lFP+CDi2ThkczfbuU3J1yXcHLiVHgcmctBz/dx0+WPrWaK6qMN0OKbUdvt9UZsusnerd9t6Oj3r/lE3/oL/hXzbBX/AN67/J6q+OqJafwc2tfugMLN0EvmZ+zyNxw47+tfS8/1UZJ46iu35jyWJ0ZQfUk97MvqqEkrs8GIVkcghviO5B3GfWqn7P29rr7kvPf5RP4lFxlXCtlu5cHJ2m7dbGlEvLkFpWTuADt/EfSpVODGjPsyvy62l+xweRKWJGnfu2Zr2dY8HN74fG/yrz/2r911Uox0WPBHNxlzfB1Zn8NPwFW1H/HH9DrLyz0rsYFAKAg1hgsLz/wZ/eFU/G0/TdiTi/8AIc5vOnZnvU3WyvJS+cEoXtvj+flXPh/HMd4npcxbiRcrh1nXV1L7l1BGon1vJuTcdtksqCQjGVKPSouRZwmvlso23v8A0dK45s+aNng89IWaXaW5KZqUAuLSU8Kge1b8d4tj5jrnTJ9l+hjh2BKhy6i8nlb7FMY1NJnupR4Z7mAYVvgjbau+VxzGnw6FUW+ZaOVHDprJlZ8FlEsl+scl42lUd5tzus9u2x71Lu4vwvOx4LK3uJxWDmY1knT4ZdWDT02JIlTpziDJebWlKEHuruTUfiPHMa6FdFC9kTpjcOuhKVk/LLT9Fp6tOpiKCPFNyOYn7YwQRg74qRD7R40c7qPfJy6/0aS4VN0ci87KpOmJxs9vjR0tl5l1Tr2V4GTjoe/StYcfx5ZN1s37ZLS/wZlwuxVwX0ZtdxaU/b5TLQ/WONKSMnuRivJ41tdWYrN+3ey6tqlKnkX0MRpKzybXDkNTkNlbjoUgghW2BV19ouLwzr4yx5eEiv4ZgumDU18lV1tUuVqC2zGgkx42OP7WD17CteHcUqowLapv3S8G2ViTsyYWLwjHWzS8iHqEylhvwqHFrb+1k5PTarPI+0lEsGNUfx9t/sQ6eGWLIlY/HcvtIWiXaGpSJiUAuOBSAhWciqvjXEac3oxr+NEvh+JdjqTl8nSWfuI+Ar0dD9kf0NJeT1rsYFAUqcQkZUoD4mmjG1rZTzmjgBxJz5GmmY5l8MpeabfbKXBlPWuN1MLo8s/B0jJxe0WrkOEyhS3UoQhIyVKOAKhLhGNvSibSyJ+WyGosB9sOMhtxB6KSrIPzrZ8Kx965dMLIlraZV7vif4Q/Oj4Zja04mevZ9QYERKcltIHzouF43jlMeomvkIhQljKG0KHmDmsfdmMvymVfZ9SHIcJv76W0fvHFPurGf5dDrT+pKYERQBS2gg9CD1rL4XjN/hHWn9Sfd0X/AAk1j7qxd/hHXsflgwIgH4Sfzp91Yv8A5HXs+pBgQ0jKm0AeZNZ+6sV+ImOvNfIMKHwlQQjhHUg0lwrHlpco9RJLyEwYax9lCT8DT7qx0u8TKyLPhk+74oP4SafdePveh15+Nl2MJAwdhtU+KUY6Ryb+pRHlR5KVKjvIdSk8JKDnB8q6Si4+UaxkpeD1BBrU2MNqSxRL3EQiap4BglxHKcKN8Y39K602uEto4X1qcWcssXg4Fol3uV4l6RBmJTGbDxCVHqOLzFWtznOSgku6KqrlhFzb8G1s6uvVvm2739EiCNcE8TamOIKbBx1yTnqKiekhZF9PyiSsmyuSdnhmPuupLzf7TeVRYcRNqaQptZUTzSPMHOPXGK6VUQqlDe9s523ztjLXgotWoZdm0tamYb0BtTqXDwyErWvPFthKe1Zlj9S2TkmZhe660onujX91Va0T0w4pS1IDErCVbZ3BTvt3GDWrwq1Ll330bLNsa3oyfvq5akuN4s9tMRENpjAkKCicqG3Q/H6Vy6MKYxnLydFdZfKUY+DDWrUMyzThp+KIMVqGsNEzQsLfOcKXkbDO5HxFdp48ZR5/JxhdKE+QymtEoe1jp5p22qujSokwmKnhIUQWsHCiBtn86rNaLVPa2WEDUI08xck8oQ5Ei4oZj22UTwQ0qT99RGcpOCrCdu3rQyXqNbT203BptEO6vtRfEMOwmXUIJBwUrSSTkDB2O47UB43vUN5e0kbhbrxaHj4xltTsNpxJSFOITwkFRwcnBz+znodw8gyWvXJjGh3jPcY8WVpClRgpKCeLtkk9PWpOGk7UmRM6XLVtGnxpcmDbJ2nkuq5s12PySVHi4XAOIj5VYWVwk1bHwiuhZYt1Pyz0sd6k6atV7cihDy2ZbbYS8SRj7Q8/SsXUxusil8ozTdOqMm/g2ybqqbHvdmhIYYW3OYS45kK4gSOid6hLHhySbfdMmPKlzrX0LLT2s7heLz4V826M0XFIMdfEHsAHoc4z5j411sxYwrUls0rypyscZeDC6f1U3ZtOvuwbZHbkSJvLbbStfCo8OcnJz5DbzFdrsZzsXM/gj05fTg1FfJ0LTbl9dZcVf2ojZOC0I2emO+SarrlWpagWdDm47kZhxAWhST0UMVy+Uzs1tGrxNDW6PaJltddefZkuB0qUQFIUOhGKlyzJuamu2iJHDgoOL77PO36Fjx5kaRNuEucmKB4dp4jhRSWXLTUVrZhYUdpt70eDvs8hGRKLFwmsRpOS5GbXhJJ8/MZ7VssyWo7XdfJh4UdvT0mSfZ/GT4Fca5S2HoqSkOo4eJQyfTruaetl32k9j0UdLuWV2077i05Og26PJuZuLgGFEZaV2Vt5GtoZPUtjOXblNJ47qrlCPfZmtCafVYbOG5KQJb6uY9jfB7DPpXDLuVs+3g74lLqh3La4aGRcZhdn3WY/H5pdDCuHbJzwg4zjtXSGW4Q5Yo0lhxlPmbMheNOqm3K3XCJcHIT8FpxlBS2lYUhfDkEH90VCckvJMS0tFmvR8NxqQuRcJi7g6+h8TytIcbWjZPCAMAAEjGMHJz1rR2R+ptpl6iFcW2XQ9qJxbikgNr5DYCMHrjG+elavIrXyNMxsjSsORCubcy4uuSrg4047IbQElK2yCgpSBjYgdc5rX1MPCY0ZG56eN6sCLbcZ7riiQpb6EBKlYORtjFS8e/pvmRwyKVbHlZB0lBN6h3ZS3C9FbShKduE8IwCfWuqyJKDh8M19NHmUvlFkrQkBUe5MrkyFJnOBwnAy2oEkEbetb+sluLS8HP0cdNb8nlE0CxHkw5Juk116NsCtQO3YDbbFbSzHJNaXc1WEk/xHpG0O0LoxOnXSXNXHOWg9w7eWSBk4rV5T5OVJIwsKPNtsoR7PLam0O29yRIcC3ucl04CkKxjbbpjtW3rrOdTM+hr5HFGY09Y3bOy607c5U0Kxw8854AOwqPbb1HvWiRTV0lrezN1yOxGBQE4oCMUAwKwBwgDpWQAAOnegGBQFDjLbmONOcdK5zrjJ9zOyAy0nohP0rVVQXwNsq5aB+yPpW/JH6DbJ4R5U6cPoY2xgCtkkvBgkAVkyMUAwKbAwKAUAFATQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKA//2Q==",
  "language": "English"
},{
  "name": "680 NEWS ",
  "channel": "958",
  "category": ["Radio","News"],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "ABC - EAST (BOSTON) ",
  "channel": "281",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ABC HD - EAST (BOSTON) ",
  "channel": "1201",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "A&E ",
  "channel": "615",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "A&E HD",
  "channel": "1721",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BRAVO! ",
  "channel": "620",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BRAVO! HD",
  "channel": "1734",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CANAL M, IA RADIO DE VUES & VOIX",
  "channel": "13",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC NEWS NETWORK",
  "channel": "502",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC NEWS NETWORK HD",
  "channel": "1564",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC RADIO ONE - HALIFAX ",
  "channel": "952",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC RADIO ONE - TORONTO",
  "channel": "956",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC RADIO ONE - VANCOUVER",
  "channel": "969",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC RADIO TWO – TORONTO",
  "channel": "957",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC RADIO TWO - VANCOUVER",
  "channel": "970",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBS - EAST (BOSTON)",
  "channel": "282",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBS HD - EAST (BOSTON) ",
  "channel": "1202",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CJAD AM",
  "channel": "953",
  "category": ["Radio"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CJPX RADIO - FM 99.5 MTL",
  "channel": "974",
  "category": ["Radio", "Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CKAC AM",
  "channel": "973",
  "category": ["Radio"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CLASSICAL 96FM TORONTO",
  "channel": "963",
  "category": ["Radio", "Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "COUNTRY FM 105 ",
  "channel": "968",
  "category": ["Radio", "Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "COUNTRY MUSIC TELEVISION",
  "channel": "575",
  "category": ["Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CP 24",
  "channel": "503",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cp24",
  "language": "English"
},{
  "name": "CP 24 HD",
  "channel": "1566",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cp24",
  "language": "English"
},{
  "name": "CTV NEWS CHANNEL",
  "channel": "501",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV NEWS CHANNEL HD ",
  "channel": "1562",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "DAYSTAR CANADA",
  "channel": "650",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISCOVERY CHANNEL",
  "channel": "520",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISCOVERY CHANNEL HD",
  "channel": "1602",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "E!",
  "channel": "621",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "E! HD",
  "channel": "1736",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FOX - EAST (BOSTON)",
  "channel": "283",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FOX HD - EAST (BOSTON)",
  "channel": "1203",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GAME TV",
  "channel": "274",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HGTV",
  "channel": "600",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HGTV HD ",
  "channel": "1703",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HISTORY",
  "channel": "522",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HISTORY HD",
  "channel": "1605",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HOPE TV* ",
  "channel": "591",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI MUSIQUE - MONTREAL (CBFX FM)",
  "channel": "975",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "JOY TV VANCOUVER* ",
  "channel": "656",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "KIDS SUITE",
  "channel": "547, 1547",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "KUOW PUBLIC RADIO",
  "channel": "966",
  "category": ["Radio"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "L’ASSEMBLÉE NATIONALE DU QUÉBEC",
  "channel": "148",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "MÉTÉO MÉDIA",
  "channel": "130",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "MTV",
  "channel": "581",
  "category": ["Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MUCHMUSIC",
  "channel": "570",
  "category": ["Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MUCHMUSIC HD",
  "channel": "1670",
  "category": ["Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBC - EAST (BOSTON)",
  "channel": "280",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBC HD - EAST (BOSTON)",
  "channel": "1200",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NEWSTALK 1010",
  "channel": "964",
  "category": ["Radio","Talk"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NPR (NATIONAL PUBLIC RADIO)",
  "channel": "965",
  "category": ["Radio","Talk"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OZ-FM - ST. JOHN’S",
  "channel": "951",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PBS - EAST (BOSTON)",
  "channel": "284",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PBS HD - EAST (BOSTON)",
  "channel": "1204",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PLANETE JAZZ ",
  "channel": "960",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PREMIÈRE CHAÎNE FM 97",
  "channel": "7",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VANCOUVER (CBUF-FM) ",
  "channel": "977",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PREMIÈRE CHAINE MONTREAL (CBF-FM)",
  "channel": "976",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "Q107 - TORONTO",
  "channel": "954",
  "category": ["Radio","Rock"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RFI",
  "channel": "971",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPACE",
  "channel": "627",
  "category": ["Science Fiction"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPACE HD",
  "channel": "1746",
  "category": ["Science Fiction"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET RADIO FAN 590",
  "channel": "959",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "STINGRAY MUSIC STATIONS",
  "channel": "901-945",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET EAST",
  "channel": "406",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET EAST HD",
  "channel": "1406",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET ONTARIO ",
  "channel": "405",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET ONTARIO HD",
  "channel": "1405",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET PACIFIC",
  "channel": "407",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET PACIFIC HD",
  "channel": "1407",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET WEST",
  "channel": "408",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET WEST HD ",
  "channel": "1408",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TELELATINO",
  "channel": "700",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE COMEDY NETWORK EAST",
  "channel": "625",
  "category": ["Comedy"],
  "subscribed": true,
  "icon": "lookup:comedynetwork",
  "language": "English"
},{
  "name": "THE COMEDY NETWORK WEST",
  "channel": "626",
  "category": ["Comedy"],
  "subscribed": true,
  "icon": "lookup:comedynetwork",
  "language": "English"
},{
  "name": "THE COMEDY NETWORK HD",
  "channel": "1740",
  "category": ["Comedy"],
  "subscribed": true,
  "icon": "lookup:comedynetwork",
  "language": "English"
},{
  "name": "THE SHOPPING CHANNEL",
  "channel": "660",
  "category": ["Shop"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TLC",
  "channel": "521",
  "category": ["Life"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TLC HD",
  "channel": "1603",
  "category": ["Life"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TREEHOUSE ",
  "channel": "553",
  "category": ["Kids"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TREEHOUSE HD",
  "channel": "1640",
  "category": ["Kids"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN1",
  "channel": "400",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN1 HD",
  "channel": "1400",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN3",
  "channel": "402",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN3 HD",
  "channel": "1402",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN4",
  "channel": "403",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN4 HD",
  "channel": "1403",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN5",
  "channel": "404",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN5 HD",
  "channel": "1404",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN RADIO 1050",
  "channel": "995",
  "category": ["Radio", "Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN RADIO 1290 WINNIPEG",
  "channel": "984",
  "category": ["Radio", "Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN RADIO 990 MONTREAL",
  "channel": "985",
  "category": ["Radio", "Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - CARLETON*",
  "channel": "94",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - MONTREAL*",
  "channel": "115",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA HD - MONTREAL* ",
  "channel": "1804",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - GATINEAU, HULL, OTTAWA* ",
  "channel": "1818",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - QUÉBEC*",
  "channel": "110",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - RIMOUSKI*",
  "channel": "101",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - ROUYN NORANDA* ",
  "channel": "116",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - SAGUENAY*",
  "channel": "105",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - SHERBROOKE* ",
  "channel": "107",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - TROIS-RIVIERES* ",
  "channel": "541",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - OUEST* ",
  "channel": "121",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - MONTRÉAL* ",
  "channel": "114",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V HD - MONTRÉAL* ",
  "channel": "1803",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - GATINEAU*",
  "channel": "543",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - QUÉBEC*",
  "channel": "109",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - SAGUENAY*",
  "channel": "104",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - SHERBROOKE* ",
  "channel": "106",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - TROIS-RIVIERES* ",
  "channel": "540",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - VAL-D’OR*",
  "channel": "544",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VISION TV ",
  "channel": "261",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VOAR 1210 AM - NFLD",
  "channel": "950",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "W NETWORK ",
  "channel": "602",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "W NETWORK HD",
  "channel": "1705",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WAHSA FM",
  "channel": "972",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WRN FM",
  "channel": "962",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YTV - EAST ",
  "channel": "551",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YTV HD",
  "channel": "1646",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ABC SPARK",
  "channel": "560",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ABC SPARK HD",
  "channel": "1650",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ACTION",
  "channel": "334",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMC",
  "channel": "293",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMC HD",
  "channel": "1281",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ANIMAL PLANET",
  "channel": "525",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ANIMAL PLANET HD ",
  "channel": "1612",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BBC WORLD NEWS",
  "channel": "510",
  "category": ["News"],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "BET",
  "channel": "576",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BNN ",
  "channel": "504",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BNN HD",
  "channel": "1568",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHRGD",
  "channel": "562",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHRGD HD",
  "channel": "1648",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CNBC",
  "channel": "509",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CNN ",
  "channel": "500",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cnn",
  "language": "English"
},{
  "name": "CNN HD",
  "channel": "1578",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cnn",
  "language": "English"
},{
  "name": "COSMOPOLITAN TV ",
  "channel": "608",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "COTTAGE LIFE",
  "channel": "641",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "COTTAGE LIFE HD",
  "channel": "1730",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CRIME + INVESTIGATION ",
  "channel": "638",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISCOVERY SCIENCE ",
  "channel": "523",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISCOVERY SCIENCE HD",
  "channel": "1606",
  "category": ["Science", "Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISNEY CHANNEL HD",
  "channel": "563",
  "category": ["Kids"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISNEY JUNIOR HD",
  "channel": "1651",
  "category": ["Kids"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISNEY XD HD",
  "channel": "1652",
  "category": ["Kids"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DIY",
  "channel": "607",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DOCUMENTARY CHANNEL",
  "channel": "336",
  "category": ["Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DOCUMENTARY CHANNEL HD",
  "channel": "1310",
  "category": ["Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAMILY - EAST",
  "channel": "556",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAMILY - WEST",
  "channel": "557",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAMILY HD",
  "channel": "1642",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAMILY JUNIOR",
  "channel": "549",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FOOD NETWORK CANADA",
  "channel": "603",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FOOD NETWORK CANADA HD",
  "channel": "1706",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FX HD",
  "channel": "1290",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HLN HEADLINE NEWS",
  "channel": "508",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cnn",
  "language": "English"
},{
  "name": "HLN HEADLINE NEWS HD",
  "channel": "1579",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cnn",
  "language": "English"
},{
  "name": "KTLA",
  "channel": "298",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "KTLA HD",
  "channel": "1238",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "M3",
  "channel": "571",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "M3 HD",
  "channel": "1671",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MEDIASET ITALIA",
  "channel": "698",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MTV 2",
  "channel": "577",
  "category": ["Music"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NATIONAL GEOGRAPHIC",
  "channel": "524",
  "category": ["Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NATIONAL GEOGRAPHIC HD",
  "channel": "1609",
  "category": ["Education"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OLN",
  "channel": "411",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OLN HD",
  "channel": "1411",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PEACHTREE TV",
  "channel": "294",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PEACHTREE TV HD",
  "channel": "1231",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RUSSIA TODAY ",
  "channel": "724",
  "category": ["News"],
  "subscribed": true,
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAb1BMVEV2vR0AAACi3Xhyuw9xthwXJQZ6wx54wB5pqRpRghRCahBelhd9yR8bKwYYJgWg3HQdLwe76p8LEgMSHAQhNQguSgtAZhAGCQGGqXRMehNZjxYIDgI2Vg1usBs7Xw4xTgwkOglHchJkoBmE1CCazHils3loAAAByUlEQVRoge3b626CQBAF4EFhF+WmorVe8Na+/zM21lJZOFGJjLTJOX9nmC+6WVhMlGk2eH2yqWTDPpLJYCivz3BAly5dunTp0qVLly5dunTp0qVL95+7fotY0/qSn9RdG26CR5PO9yvfiI1mD19SZvbecL12OVoTtbzknKddL5F+XC9Vc5OP+DuyTtCMSeRmDHq2tZ7Ph9y4rJodgiNjKzEj0DJ2WmxjH912RcwC1BfWGYHd2/v3novXv1B3JZ6Dhqj6gXVcuMKj6lQl960fNz6AhrW+WyxBQ6i+vvEe1OfOTAXXxmh1vZUztEv3cpfxT2hxvdQZ2aG7nFwSINXzTlbJvZ3IHfkiNwlrbJfu7JwNKMzX1v2SO3UTKYrCD/NmZR9LI13vI3iO2jXhzvevQQeJdX15Fe4bNgXFor7ACi4qBvqfV8wKVLdq+/f6XDDotOHenlVcW4Cyd1J7LvzW4SE19/XPV/ABvNB3xZ+hsZUOJRe//lVuH0ouPlFWjlharsgE9ATPuuB9/+C6NszLN/5r8l052Y7ytJ78eMfFP1a4HWJRT9FmxB/6PYcuXbp06dKlS5cuXbp06dKlS5fu33b7+n9ZT/+n+wJnyi0OIYHkkAAAAABJRU5ErkJggg==",
  "language": "English"
},{
  "name": "SHOWCASE",
  "channel": "616",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SHOWCASE HD",
  "channel": "1726",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPIKE",
  "channel": "628",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET 360",
  "channel": "410",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET 360 HD",
  "channel": "1410",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET FLAMES",
  "channel": "438",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET FLAMES HD",
  "channel": "1438",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET OILERS",
  "channel": "437",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET OILERS HD",
  "channel": "1437",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET ONE ",
  "channel": "418",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET ONE HD",
  "channel": "1409",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET VANCOUVER HOCKEY",
  "channel": "436",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET VANCOUVER HOCKEY HD",
  "channel": "1436",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TCM",
  "channel": "292",
  "category": ["Movies"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TCM HD",
  "channel": "1283",
  "category": ["Movies"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TELETOON - EAST",
  "channel": "554",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TELETOON - EAST HD",
  "channel": "1653",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TELETOON - WEST",
  "channel": "555",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE GOLF CHANNEL ",
  "channel": "416",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE GOLF CHANNEL HD",
  "channel": "1428",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN2",
  "channel": "401",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TSN2 HD",
  "channel": "1401",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WGN",
  "channel": "295",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WGN HD",
  "channel": "1232",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WPIX",
  "channel": "297",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WPIX HD",
  "channel": "1236",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WSBK",
  "channel": "296",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WSBK HD",
  "channel": "1234",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "3D BARKER CHANNEL",
  "channel": "1933",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ADULT LOCK",
  "channel": "741",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMBER ALERTS (INFO) ",
  "channel": "184",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMI-AUDIO ",
  "channel": "49",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMI-TÉLÉ",
  "channel": "50",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMITV",
  "channel": "48",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "APTN ",
  "channel": "269",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "APTN - NORTH",
  "channel": "270",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "APTN HD",
  "channel": "1197",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AUDIO CHANNEL (BTV FOR COMMERCIAL)",
  "channel": "979-983",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BLUE VU PPV",
  "channel": "746",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC - CAL, HAL, MTL, OTT, TOR, VAN, WIN",
  "channel": "6 FEEDS*",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC HD - CAL, HAL, MTL, OTT, TOR, VAN, WIN",
  "channel": "7 FEEDS*",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC - OTTAWA*",
  "channel": "208",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC HD - OTTAWA*",
  "channel": "1040",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - THUNDER BAY*",
  "channel": "223",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - TORONTO*",
  "channel": "210",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC HD - TORONTO*",
  "channel": "1050",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - WINDSOR* ",
  "channel": "587",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CFTV LEAMINGTON*",
  "channel": "586",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHCH TV",
  "channel": "218",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHCH TV HD",
  "channel": "1057",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHEK VICTORIA ",
  "channel": "255",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHET-TV CHETWYND, BC",
  "channel": "655",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - CALGARY* ",
  "channel": "246",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - CALGARY HD* ",
  "channel": "1133",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - EDMONTON*",
  "channel": "241",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - KAMLOOPS*",
  "channel": "259",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - KAMLOOPS HD*",
  "channel": "1159",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - MEDICINE HAT (CHAT) ",
  "channel": "248",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - MONTREAL*",
  "channel": "207",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - MONTREAL HD* ",
  "channel": "1033",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - PRINCE GEORGE*",
  "channel": "260",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - PRINCE GEORGE HD*",
  "channel": "1160",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - SASKATCHEWAN*",
  "channel": "266",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - TORONTO* ",
  "channel": "214",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - TORONTO HD* ",
  "channel": "1053",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - VANCOUVER*",
  "channel": "253",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - VANCOUVER HD*",
  "channel": "1153",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - WINNIPEG*",
  "channel": "228",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - WINNIPEG HD",
  "channel": "1093",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CPAC - ENGLISH",
  "channel": "512",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CPAC - FRENCH",
  "channel": "149",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CTV - KITCHENER* ",
  "channel": "584",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - OTTAWA*",
  "channel": "229",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - TORONTO* ",
  "channel": "212",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV HD - TORONTO* ",
  "channel": "1051",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - WINNIPEG*",
  "channel": "225",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV HD - WINNIPEG*",
  "channel": "1091",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - TORONTO* ",
  "channel": "219",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO HD - TORONTO*",
  "channel": "1054",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - LONDON* ",
  "channel": "220",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - OTTAWA*",
  "channel": "209",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - WINDSOR* ",
  "channel": "585",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "FRENCH VU! INFO CHANNEL",
  "channel": "122",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - CALGARY* ",
  "channel": "244",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - CALGARY HD* ",
  "channel": "899",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - EDMONTON* ",
  "channel": "240",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - HALIFAX* ",
  "channel": "204",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - KENORA*",
  "channel": "224",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - LETHBRIDGE*",
  "channel": "644",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - OKANAGAN*",
  "channel": "654",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - REGINA*",
  "channel": "594",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - SAINT JOHN*",
  "channel": "198",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - SASKATCHEWAN* ",
  "channel": "236",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - THUNDER BAY*",
  "channel": "222",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - THUNDER BAY HD*",
  "channel": "1065",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - TORONTO*",
  "channel": "211",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - TORONTO HD*",
  "channel": "1052",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - VANCOUVER*",
  "channel": "252",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - VANCOUVER HD*",
  "channel": "807",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - WINNIPEG* ",
  "channel": "227",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HAY RIVER TV",
  "channel": "649",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - EDMONTON*",
  "channel": "119",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - EDMONTON HD*",
  "channel": "1830",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - MONCTON*",
  "channel": "100",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - MONCTON HD* ",
  "channel": "1801-1802",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - MONTRÉAL* ",
  "channel": "860",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - MONTREAL HD* ",
  "channel": "1802",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - OTTAWA*",
  "channel": "125",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - OTTAWA HD*",
  "channel": "872",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - REGINA* ",
  "channel": "98",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - TORONTO* ",
  "channel": "99",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - VANCOUVER* ",
  "channel": "120",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - VANCOUVER HD* ",
  "channel": "1832",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - WINNIPEG*",
  "channel": "118",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RDI",
  "channel": "126",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RDI HD ",
  "channel": "1882",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "INTERNAL CHANNEL ",
  "channel": "898",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "KIDS VU! PPV ENGLISH ",
  "channel": "561",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NEW CHANNELS",
  "channel": "272",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NTV- ST. JOHN’S",
  "channel": "199",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NUNAVUT AND NWT LEGILSATIVE ASSEMBLY",
  "channel": "513",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI - B.C.",
  "channel": "254",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI HD - B.C.",
  "channel": "1155",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 1 - TORONTO ",
  "channel": "215",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 1 HD - TORONTO",
  "channel": "1055",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 2 - TORONTO ",
  "channel": "216",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 2 HD - TORONTO ",
  "channel": "1056",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PPV",
  "channel": "569",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PUSH VOD",
  "channel": "835",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RED CARPET VU!",
  "channel": "317",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TELILE COMMUNITY TV!",
  "channel": "536",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TFO",
  "channel": "137",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TFO HD",
  "channel": "1837",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE KNOWLEDGE NETWORK",
  "channel": "268",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE WEATHER NETWORK",
  "channel": "505",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TV5",
  "channel": "145",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TV5 HD",
  "channel": "1835",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - GATINEAU, HULL, OTTAWA",
  "channel": "117",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - GATINEAU, HULL, OTTAWA HD",
  "channel": "1818",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - MONTRÉAL",
  "channel": "861",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVA - MONTRÉAL HD",
  "channel": "1804",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TVO",
  "channel": "265",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "UNIS TV",
  "channel": "150",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - GATINEAU",
  "channel": "543",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "V - GATINEAU HD",
  "channel": "1817",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VALEMOUNT COMMUNITY TV",
  "channel": "653",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS - TÉLÉ À LA CARTE ADULTE",
  "channel": "759-761",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS ADULT - PAY-PER-VIEW",
  "channel": "750-762",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS INFORMATION CHANNEL",
  "channel": "742",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS PREVIEW CHANNEL",
  "channel": "749",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! - PAY-PER-VIEW",
  "channel": "VARIES",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! - PAY-PER-VIEW HD",
  "channel": "VARIES",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! - TÉLÉ À LA CARTE",
  "channel": "VARIES",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! - TÉLÉ À LA CARTE HD",
  "channel": "VARIES",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! 3D HD",
  "channel": "1933",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! INFO CHANNEL",
  "channel": "412, 482",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VU! PPV SPORTING EVENTS ",
  "channel": "399",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YES BURLINGTON (CITS-TV) ",
  "channel": "651",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YES CALGARY (CKCS-TV)",
  "channel": "646",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YES EDMONTON (CKES-TV) ",
  "channel": "648",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AL JAZEERA ENGLISH",
  "channel": "516",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AMERICAN HEROES CHANNEL",
  "channel": "631",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BBC CANADA",
  "channel": "635",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BBC KIDS ",
  "channel": "558",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BOOK TELEVISION",
  "channel": "529",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CARTOON NETWORK",
  "channel": "564",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CNN INTERNATIONAL",
  "channel": "511",
  "category": ["News"],
  "subscribed": true,
  "icon": "lookup:cnn",
  "language": "English"
},{
  "name": "COMEDY GOLD",
  "channel": "637",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DEJAVIEW",
  "channel": "636",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DISCOVERY VELOCITY",
  "channel": "1601",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DTOUR",
  "channel": "618",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DTOUR HD",
  "channel": "1728",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FASHION TELEVISION",
  "channel": "605",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FOX NEWS CHANNEL ",
  "channel": "507",
  "category": ["News"],
  "subscribed": true,
  "icon": "data:image/png;base64,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",
  "language": "English"
},{
  "name": "FXX HD",
  "channel": "1291",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FYI",
  "channel": "604",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "G4 TECH TV CANADA",
  "channel": "515",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GAME SHOW NETWORK ",
  "channel": "639",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GAME SHOW NETWORK HD",
  "channel": "1732",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GUSTO ",
  "channel": "619",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HIFI HD",
  "channel": "1623",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "H2",
  "channel": "629",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "I CHANNEL",
  "channel": "514",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "IFC - THE INDEPENDENT FILM CHANNEL",
  "channel": "330",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "INVESTIGATION DISCOVERY (ID)",
  "channel": "528",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "INVESTIGATION DISCOVERY HD (ID)",
  "channel": "1714",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LEAFS TV ",
  "channel": "422",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LEAFS TV HD",
  "channel": "1422",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LIFETIME ",
  "channel": "335",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LIFETIME HD",
  "channel": "1707",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LOVE NATURE HD",
  "channel": "1625",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MAKEFUL",
  "channel": "530",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MIRACLE CHANNEL ",
  "channel": "652",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MOVIETIME",
  "channel": "630",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MOVIETIME HD ",
  "channel": "1285",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MSNBC HD",
  "channel": "1588",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBA TV CANADA",
  "channel": "415",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBA TV CANADA HD",
  "channel": "1418",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NICKELODEON",
  "channel": "559",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ONE: GET FIT",
  "channel": "606",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OPRAH WINFREY NETWORK",
  "channel": "526",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OPRAH WINFREY NETWORK HD",
  "channel": "1711",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OUT TV",
  "channel": "609",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RADX HD",
  "channel": "1627",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SILVER SCREEN CLASSIC",
  "channel": "337",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SLICE",
  "channel": "601",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SLICE HD",
  "channel": "1704",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUNDANCE",
  "channel": "613",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE FIGHT NETWORK",
  "channel": "388",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "THE SMITHSONIAN CHANNEL",
  "channel": "1629",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TRAVEL & ESCAPE",
  "channel": "527",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VICELAND",
  "channel": "622",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "W MOVIES",
  "channel": "333",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "W MOVIES HD",
  "channel": "1305",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WFN",
  "channel": "419",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "WILD TV ",
  "channel": "389",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ABC - EAST (BOSTON) ",
  "channel": "281",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ABC HD - EAST (BOSTON) ",
  "channel": "1201",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ABC - WEST (SEATTLE) ",
  "channel": "288",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ABC HD - WEST (SEATTLE)",
  "channel": "1211",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC - CAL, HAL, MTL, OTT, TOR, VAN, WIN",
  "channel": "6 FEEDS*",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC HD - CAL, HAL, MTL, OTT, TOR, VAN, WIN",
  "channel": "7 FEEDS*",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBC - OTTAWA*",
  "channel": "208",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC HD - OTTAWA*",
  "channel": "1040",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - THUNDER BAY*",
  "channel": "223",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - TORONTO*",
  "channel": "210",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC HD - TORONTO*",
  "channel": "1050",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBC - WINDSOR* ",
  "channel": "587",
  "category": [],
  "subscribed": true,
  "icon": "lookup:cbc",
  "language": "English"
},{
  "name": "CBS - EAST (BOSTON)",
  "channel": "282",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBS HD - EAST (BOSTON) ",
  "channel": "1202",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBS - WEST (SEATTLE)",
  "channel": "289",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBS HD - WEST (SEATTLE) ",
  "channel": "1212",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - CALGARY* ",
  "channel": "246",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - CALGARY HD* ",
  "channel": "1133",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - EDMONTON*",
  "channel": "241",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - MEDICINE HAT (CHAT) ",
  "channel": "248",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - MONTREAL*",
  "channel": "207",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - MONTREAL HD* ",
  "channel": "1033",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - SASKATCHEWAN*",
  "channel": "266",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - TORONTO* ",
  "channel": "214",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - TORONTO HD* ",
  "channel": "1053",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - VANCOUVER*",
  "channel": "253",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - VANCOUVER HD*",
  "channel": "1153",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - WINNIPEG*",
  "channel": "228",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CITYTV - WINNIPEG HD",
  "channel": "1093",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CTV - KITCHENER* ",
  "channel": "584",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - OTTAWA*",
  "channel": "229",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - TORONTO* ",
  "channel": "212",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV HD - TORONTO* ",
  "channel": "1051",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV - WINNIPEG*",
  "channel": "225",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV HD - WINNIPEG*",
  "channel": "1091",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - TORONTO* ",
  "channel": "219",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO HD - TORONTO*",
  "channel": "1054",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - LONDON* ",
  "channel": "220",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - OTTAWA*",
  "channel": "209",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "CTV TWO - WINDSOR* ",
  "channel": "585",
  "category": [],
  "subscribed": true,
  "icon": "lookup:ctv",
  "language": "English"
},{
  "name": "FOX - EAST (BOSTON)",
  "channel": "283",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FOX HD - EAST (BOSTON)",
  "channel": "1203",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FOX - WEST (SEATTLE)",
  "channel": "290",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FOX - WEST (SEATTLE) HD",
  "channel": "1213",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - CALGARY",
  "channel": "244",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - CALGARY HD ",
  "channel": "899",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - EDMONTON",
  "channel": "240",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - HALIFAX",
  "channel": "204",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - KENORA*",
  "channel": "224",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - LETHBRIDGE ",
  "channel": "644",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - OKANAGAN",
  "channel": "654",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - REGINA",
  "channel": "594",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - SAINT JOHN",
  "channel": "198",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - SASKATCHEWAN",
  "channel": "236",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - THUNDER BAY*",
  "channel": "222",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - THUNDER BAY HD",
  "channel": "1065",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - TORONTO*",
  "channel": "211",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - TORONTO HD*",
  "channel": "1052",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - VANCOUVER",
  "channel": "252",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - VANCOUVER HD",
  "channel": "807",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GLOBAL - WINNIPEG",
  "channel": "227",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - EDMONTON",
  "channel": "119",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - EDMONTON HD",
  "channel": "1830",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - MONCTON",
  "channel": "100",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - MONCTON HD",
  "channel": "1801-1802",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MONTRÉAL",
  "channel": "860",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - MONTREAL HD",
  "channel": "1802",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - OTTAWA",
  "channel": "125",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - TORONTO",
  "channel": "99",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VANCOUVER",
  "channel": "120",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI RADIO-CANADA TÉLÉ (ICI) - VANCOUVER HD",
  "channel": "1832",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBC - EAST (BOSTON)",
  "channel": "280",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBC HD - EAST (BOSTON)",
  "channel": "1200",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBC - WEST (SEATTLE)",
  "channel": "287",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBC HD - WEST (SEATTLE) ",
  "channel": "1210",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI - B.C.",
  "channel": "254",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI HD - B.C.",
  "channel": "1155",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 1 - TORONTO ",
  "channel": "215",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "OMNI 1 HD - TORONTO",
  "channel": "1055",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PBS - EAST (BOSTON)",
  "channel": "284",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PBS HD - EAST (BOSTON)",
  "channel": "1204",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PBS - WEST (SEATTLE)",
  "channel": "291",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PBS HD - WEST (SEATTLE)",
  "channel": "1214",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CRAVETV",
  "channel": "(ON DEMAND)",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CRAVETV",
  "channel": "(ON DEMAND)",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - EAST",
  "channel": "306",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - EAST",
  "channel": "1258",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - WEST",
  "channel": "307",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - WEST",
  "channel": "1259",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 ",
  "channel": "300",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 HD ",
  "channel": "1251",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2",
  "channel": "301",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2 HD ",
  "channel": "1252",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 ",
  "channel": "302",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 HD ",
  "channel": "1253",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 4 ",
  "channel": "303",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE",
  "channel": "304",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE HD",
  "channel": "1256",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE 2",
  "channel": "305",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 1",
  "channel": "326",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 1 HD",
  "channel": "1277",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 2 ",
  "channel": "327",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 2 HD",
  "channel": "1278",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 3",
  "channel": "328",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 3 HD",
  "channel": "1279",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 4",
  "channel": "329",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 4 HD",
  "channel": "1280",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CRAVETV",
  "channel": "(ON DEMAND)",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - EAST",
  "channel": "306",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - EAST",
  "channel": "1258",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - WEST",
  "channel": "307",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - WEST",
  "channel": "1259",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 ",
  "channel": "300",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 HD ",
  "channel": "1251",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2",
  "channel": "301",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2 HD ",
  "channel": "1252",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 ",
  "channel": "302",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 HD ",
  "channel": "1253",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 4 ",
  "channel": "303",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE",
  "channel": "304",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE HD",
  "channel": "1256",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE 2",
  "channel": "305",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - EAST",
  "channel": "306",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - EAST",
  "channel": "1258",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA - WEST",
  "channel": "307",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HBO CANADA HD - WEST",
  "channel": "1259",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 ",
  "channel": "300",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 1 HD ",
  "channel": "1251",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2",
  "channel": "301",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 2 HD ",
  "channel": "1252",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 ",
  "channel": "302",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 3 HD ",
  "channel": "1253",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN 4 ",
  "channel": "303",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE",
  "channel": "304",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE HD",
  "channel": "1256",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TMN - ENCORE 2",
  "channel": "305",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 1",
  "channel": "326",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 1 HD",
  "channel": "1277",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 2 ",
  "channel": "327",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 2 HD",
  "channel": "1278",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 3",
  "channel": "328",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 3 HD",
  "channel": "1279",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 4",
  "channel": "329",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER CHANNEL 4 HD",
  "channel": "1280",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ÉCRAN 1",
  "channel": "180",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ÉCRAN 1 HD",
  "channel": "1890",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ÉCRAN 2",
  "channel": "181",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ÉCRAN 2 HD",
  "channel": "1891",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ÉCRAN 3",
  "channel": "182",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ÉCRAN 3 HD",
  "channel": "1892",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SUPER ÉCRAN 4",
  "channel": "183",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HOLLYWOOD SUITE 70s",
  "channel": "1315",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HOLLYWOOD SUITE 80s ",
  "channel": "1316",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HOLLYWOOD SUITE 90s ",
  "channel": "1317",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HOLLYWOOD SUITE 00s ",
  "channel": "1318",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "BEIN SPORTS HD",
  "channel": "1412",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CHAMPION’S LEAGUE ",
  "channel": "731",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "INDIAN PREMIER LEAGUE",
  "channel": "732",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HPI - 1",
  "channel": "478",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HPI - 2",
  "channel": "479",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HPITV - CANADA ",
  "channel": "480",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HPITV - INTERNATIONAL ",
  "channel": "481",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "HPITV - WEST ",
  "channel": "477",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MLB EXTRA INNINGS",
  "channel": "485-497",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MLB EXTRA INNINGS HD",
  "channel": "1480-1487",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBA LEAGUE PASS",
  "channel": "465-476",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NBA LEAGUE PASS HD",
  "channel": "1471-1479",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NFL RED ZONE HD ",
  "channel": "1500",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NFL SUNDAY TICKET",
  "channel": "451-464",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NFL SUNDAY TICKET HD",
  "channel": "1501-1517",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NHL CENTRE ICE",
  "channel": "426-435",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NHL CENTRE ICE HD",
  "channel": "1451-1457",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET WORLD",
  "channel": "420",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SPORTSNET WORLD HD",
  "channel": "1414",
  "category": ["Sports"],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "U.S. COLLEGE SPORTS",
  "channel": "390-395",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "U.S. COLLEGE SPORTS HD",
  "channel": "396-398",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ADDIK",
  "channel": "136",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ADDIK HD",
  "channel": "1868",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ARGENT",
  "channel": "128",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CANAL D",
  "channel": "129",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CANAL D HD",
  "channel": "1872",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DE VUES & VOIX ",
  "channel": "13",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CANAL SAVOIR ",
  "channel": "152",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CANAL VIE",
  "channel": "135",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CANAL VIE HD",
  "channel": "1866",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CANAL Z TÉLÉ",
  "channel": "131",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CANAL Z TÉLÉ HD",
  "channel": "1858",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CASA",
  "channel": "154",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CASA HD",
  "channel": "1850",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CINÉPOP",
  "channel": "185",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "CINÉPOP HD",
  "channel": "1895",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "ÉVASION",
  "channel": "134",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "ÉVASION HD",
  "channel": "1864",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "HISTORIA",
  "channel": "133",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "HISTORIA HD",
  "channel": "1862",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "ICI ARTV",
  "channel": "143",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI ARTV HD",
  "channel": "1844",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ICI EXPLORA HD",
  "channel": "1845",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "INVESTIGATION HD (FRENCH) ",
  "channel": "1847",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "LA CHAÎNE DISNEY",
  "channel": "186",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "LCN",
  "channel": "127",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LCN HD",
  "channel": "1887",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MOI&CIE",
  "channel": "194",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MUSIMAX",
  "channel": "142",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "MUSIQUEPLUS",
  "channel": "141",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "MUSIQUEPLUS HD",
  "channel": "1876",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "PRISE 2",
  "channel": "153",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "PRISE 2 HD",
  "channel": "1849",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "RDS ",
  "channel": "123",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "RDS HD",
  "channel": "1880",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "RDS INFO",
  "channel": "124",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "RDS2",
  "channel": "192",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "RDS2 HD",
  "channel": "1881",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "SÉRIES+ ",
  "channel": "132",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "SÉRIES+ HD",
  "channel": "1860",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TÉLÉMAGINO ",
  "channel": "189",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TÉLÉ-QUÉBEC",
  "channel": "138",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TÉLÉ-QUÉBEC HD",
  "channel": "1805",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TELETOON FRENCH ",
  "channel": "139",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TFO",
  "channel": "137",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TFO HD ",
  "channel": "1837",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TVA SPORTS ",
  "channel": "193",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TVA SPORTS HD",
  "channel": "1883",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "TVA SPORTS 2 HD",
  "channel": "1884",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "French"
},{
  "name": "VRAK TV",
  "channel": "140",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VRAK TV HD",
  "channel": "1870",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YOOPA",
  "channel": "144",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "YOOPA HD",
  "channel": "1874",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ZESTE",
  "channel": "190",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ZESTE HD",
  "channel": "1865",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AOV ADULT MOVIE CHANNEL",
  "channel": "781",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AOV MALE FLIXXX",
  "channel": "782",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PLAYBOY TV",
  "channel": "780",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS PREVIEW CHANNEL",
  "channel": "749",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VENUS PREVIEW CHANNEL",
  "channel": "749",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "EXXXTASY",
  "channel": "775",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PENTHOUSE TV",
  "channel": "776",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RED HOT TV",
  "channel": "777",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VIVIDTV ENGLISH",
  "channel": "779",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "VIVIDTV FRENCH ",
  "channel": "778",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - EAST",
  "channel": "717",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - WEST",
  "channel": "718",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - EAST (MANDARIN)",
  "channel": "716",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION 2",
  "channel": "721",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - EAST",
  "channel": "717",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - WEST",
  "channel": "718",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FAIRCHILD TELEVISION - EAST (MANDARIN)",
  "channel": "716",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TALENTVISION",
  "channel": "719",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PHOENIX MANDARIN",
  "channel": "715",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "LS TIMES",
  "channel": "677",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FILIPINO TV",
  "channel": "725",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "GMA PINOY TV",
  "channel": "723",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PROSIEBENSAT.1 WELT",
  "channel": "710",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "DEUTSCHE WELLE TV ",
  "channel": "709",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RADIO HERZ ",
  "channel": "986",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ERT SAT",
  "channel": "714",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ODYSSEY 1 ",
  "channel": "713",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "MEGA COSMOS",
  "channel": "712",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RAI INTERNATIONAL",
  "channel": "701",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "Italian"
},{
  "name": "POLSKIE RADIO 1",
  "channel": "987",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "POLSKIE RADIO 3",
  "channel": "988",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "TV POLONIA ",
  "channel": "711",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "Polish"
},{
  "name": "RTVI ",
  "channel": "722",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "RUSSIA TODAY ",
  "channel": "724",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AAPKA COLORS ",
  "channel": "680",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ATN",
  "channel": "702",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "SONY",
  "channel": "729",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ZEE TV CANADA",
  "channel": "679",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "AAPKA COLORS",
  "channel": "680",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ATN B4U HINDI",
  "channel": "706",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "ATN PUNJABI",
  "channel": "704",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "Punjabi"
},{
  "name": "ATN TAMIL",
  "channel": "705",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "CBN",
  "channel": "730",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "FILMY",
  "channel": "681",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "NDTV",
  "channel": "727",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "PTC PUNJABI",
  "channel": "690",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "Punjabi"
},{
  "name": "TAMIL VISION",
  "channel": "707",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "English"
},{
  "name": "UNIVISION CANADA",
  "channel": "699",
  "category": [],
  "subscribed": true,
  "icon": null,
  "language": "Spanish"
}
]
